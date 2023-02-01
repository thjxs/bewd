import { Filter, Options } from 'http-proxy-middleware';
type Config = {
    filter: Filter;
    options: Options;
};
export declare function createProxy(port: number, configs: Config[]): void;
export {};
