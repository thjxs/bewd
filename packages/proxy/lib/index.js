"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProxy = void 0;
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
function createProxy(port, configs) {
    const app = (0, express_1.default)();
    const server = app.listen(port);
    configs.forEach((config) => {
        const { filter, options } = config;
        const proxy = (0, http_proxy_middleware_1.createProxyMiddleware)(filter, options);
        app.use(proxy);
        if (options.ws && proxy.upgrade) {
            server.on('upgrade', proxy.upgrade);
        }
    });
}
exports.createProxy = createProxy;
