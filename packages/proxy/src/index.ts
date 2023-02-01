import express from 'express';
import { createProxyMiddleware, Filter, Options } from 'http-proxy-middleware';

type Config = {
  filter: Filter;
  options: Options;
};

export function createProxy(port: number, configs: Config[]) {
  const app = express();

  const server = app.listen(port);

  configs.forEach((config) => {
    const { filter, options } = config;

    const proxy = createProxyMiddleware(filter, options);

    app.use(proxy);

    if (options.ws && proxy.upgrade) {
      server.on('upgrade', proxy.upgrade);
    }
  });
}
