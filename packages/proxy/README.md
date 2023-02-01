# HTTP proxy

创建 HTTP 代理， 方便在不同的环境进行调试。

## usage

```js
const {createProxy}  = require('@bewd/proxy')

const target = 'http://yourserver'

const port = 3000

createProxy(port, [{filter: '/', options: {target}}])
```

创建有 WebSocket 的 HTTP 代理

```js
const {createProxy}  = require('@bewd/proxy')

const target = 'http://yourserver'

const port = 3000

const options = {
  target,
  ws: true,
  changeOrigin: true,
  onProxyReqWs(proxyReq, req, socket) {
    //
  }
}

createProxy(port, [{filter: '/', options}])
```
