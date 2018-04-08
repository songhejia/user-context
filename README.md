# user-context
js操作上下文

# 安装
``` javascript
npm install user-context -S
``` 


# 使用

``` javascript
import UserContext from 'user-context'

--写入cookie
let user={token:"xxxxx",userInfo:{name:"张三",age:22}}
UserContext.Init(user)

--获取cookie信息
const { TOKEN,USER } = UserContext.ROLE()

``` 

