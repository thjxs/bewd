import express from 'express';
import { createProxyMiddleware, Options } from 'http-proxy-middleware';

export type Config = {
  filter: string;
  options: Options;
};

export function createProxy(port: number, configs: Config[]) {
  const app = express();

  const server = app.listen(port);

  for (const config of configs) {
    const { filter, options } = config;

    const proxy = createProxyMiddleware(options);

    app.use(filter, proxy);

    if (options.ws && proxy.upgrade) {
      server.on('upgrade', proxy.upgrade);
    }
  }
}
