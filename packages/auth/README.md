# auth

管理用户凭证

配置不同的 storage key 来支持同域下的子项目使用不同的用户体系。

## Example

```
import {setToken, getToken, clearToken, setStorageKey} from '@bewd/auth'

// 在程序初始化的时候使用
let key = 'bar'
setStorageKey(key)

let token = 'xxx'
setToken(token)

token = getToken()

clearToken()

```

