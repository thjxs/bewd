type RequestMethod = 'get' | 'post' | 'put' | 'delete';

interface RequestOptions {
  method: RequestMethod;
  headers?: Headers;
  body?: Record<string | number | symbol, unknown>;
  params?: Record<string | number | symbol, unknown>;
}

export type RequestInterceptor = (
  url: string,
  option: RequestOptions
) => { url?: string; option?: RequestOptions };

export type ResponseInterceptor = (
  response: Response,
  options: RequestOptions
) => Response | Promise<Response>;

const requestInterceptors: RequestInterceptor[] = [];
const responseInterceptors: ResponseInterceptor[] = [];

export default function request(url: string, option: RequestOptions) {
  throw new Error('Not implement yet');
}

export function useRequestInterceptors(interceptors: RequestInterceptor[]) {
  if (!Array.isArray(interceptors)) {
    throw new Error('Interceptors must be an array');
  }
  interceptors.forEach((interceptor) => {
    requestInterceptors.push(interceptor);
  });
}

export function useResponseInterceptors(interceptors: ResponseInterceptor[]) {
  if (!Array.isArray(interceptors)) {
    throw new Error('Interceptors must be an array');
  }
  interceptors.forEach((interceptor) => {
    responseInterceptors.push(interceptor);
  });
}
