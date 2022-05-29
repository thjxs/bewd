type RequestMethod = 'get' | 'post' | 'put' | 'delete';

interface RequestOptions {
  method?: RequestMethod;
  headers?: Record<string|number|symbol, string>;
  body?: Record<string | number | symbol, unknown>;
  params?: Record<string | number | symbol, unknown>;
}

interface RequestOption {
  method: RequestMethod,
  headers: Headers
  body?: BodyInit
}

export type RequestInterceptor = (
  url: string,
  requestInit: RequestOption
) => { url: string; requestInit: RequestOption };

export type ResponseInterceptor = (
  response: Response,
  options: RequestOptions
) => Response | Promise<Response>;

const requestInterceptors: RequestInterceptor[] = [];
const responseInterceptors: ResponseInterceptor[] = [];

export default function request(url: string, option?: RequestOptions) {
  const req = {
    url
  }
  const requestInit = createRequestInit(option)
  requestInterceptors.forEach(interceptor => {
    interceptor(url, requestInit)
  })
  return fetch(url, requestInit)
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

export function createRequestInit(options?: RequestOptions) {
  const headers = new Headers()
  const method = options?.method || 'get'
  if(options && options.headers) {
    const keys = Object.keys(options.headers)
    for(let i = 0; i < keys.length; i += 1) {
      const key = keys[i]
      headers.append(key, options.headers[key])
    }
  }

  const res: RequestOption = {

    method,
    headers
  }
  if(method !== 'get') {

    const body = JSON.stringify(options?.body)
    res.body = body
  }
  return res
}
