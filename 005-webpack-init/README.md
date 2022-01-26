```bash
mkdir 005-webpack-init
npm init -y
npm i -D webpack webpack-cli webpack-dev-server

npm set-script build "webpack --mode=production  --node-env=production"
npm set-script serve "webpack serve"
npm set-script watch "webpack --watch"

# 安装html-webpack-plugin管理html
npm i -D html-webpack-plugin

# 编译代码
npm run build

# 监听代码变化并自动编译
npm run watch

# 启动开发服务 http://lcoalhost:8080
npm run serve
```