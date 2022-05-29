import request, { useRequestInterceptors } from "./request";

request('localhost:5000')

request('localhost:5000', {method: 'post', body: {name: '123', age: 123, height: [1, 2]}})

request('localhost:5000', {method: 'delete'})

request('localhost:5000', {headers: {'content-type': 'application/json'}})

useRequestInterceptors([
  (url, requestInit) => {
    if(requestInit.headers) {

      requestInit.headers.append('responseType', 'application/json')
    }
    requestInit.method = 'post'

    return {
      url,
      requestInit
    }
  }
])
