# 🚀 Welcome to your new awesome project!

This project has been created using **webpack-cli**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application

```bash
λ npx webpack-cli init
[webpack-cli] For using this command you need to install: '@webpack-cli/generators' package.
[webpack-cli] Would you like to install '@webpack-cli/generators' package? (That will run 'npm install -D @webpack-cli/generators') (Y/n) Y
npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated

> ejs@2.7.4 postinstall D:\open_source\demo-fragment\007-webpack5\node_modules\ejs
> node ./postinstall.js

Thank you for installing EJS: built with the Jake JavaScript build tool (https://jakejs.com/)

npm WARN saveError ENOENT: no such file or directory, open 'D:\open_source\demo-fragment\007-webpack5\package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open 'D:\open_source\demo-fragment\007-webpack5\package.json'
npm WARN ts-node@10.4.0 requires a peer of @types/node@* but none is installed. You must install peer dependencies yourself.
npm WARN @webpack-cli/generators@2.4.1 requires a peer of webpack@4.x.x || 5.x.x but none is installed. You must install peer dependencies yourself.
npm WARN webpack-cli@4.9.1 requires a peer of webpack@4.x.x || 5.x.x but none is installed. You must install peer dependencies yourself.
npm WARN @webpack-cli/configtest@1.1.0 requires a peer of webpack@4.x.x || 5.x.x but none is installed. You must install peer dependencies yourself.
npm WARN 007-webpack5 No description
npm WARN 007-webpack5 No repository field.
npm WARN 007-webpack5 No README data
npm WARN 007-webpack5 No license field.

+ @webpack-cli/generators@2.4.1
added 548 packages from 346 contributors and removed 132 packages in 38.838s

36 packages are looking for funding
  run `npm fund` for details

? Which of the following JS solutions do you want to use? Typescript
? Do you want to use webpack-dev-server? Yes
? Do you want to simplify the creation of HTML files for your bundle? Yes
? Do you want to add PWA support? Yes
? Which of the following CSS solutions do you want to use? Stylus       
? Will you be using CSS styles along with Stylus in your project? No
? Will you be using PostCSS in your project? Yes
? Do you want to extract CSS for every file? Yes
? Do you like to install prettier to format generated configuration? Yes
? Pick a package manager: pnpm
[webpack-cli] ℹ INFO  Initialising project...
   create package.json
   create src\index.ts
 conflict README.md
? Overwrite README.md? overwrite
    force README.md
   create index.html
   create webpack.config.js
   create tsconfig.json
   create postcss.config.js
Packages: +624
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: D:\.pnpm-store\v3
  Virtual store is at:             node_modules/.pnpm
Progress: resolved 624, reused 623, downloaded 0, added 624, done

devDependencies:
+ autoprefixer 10.4.2
+ html-webpack-plugin 5.5.0
+ mini-css-extract-plugin 2.5.2
+ postcss 8.4.5
+ postcss-loader 6.2.1
+ prettier 2.5.1
+ stylus 0.56.0
+ stylus-loader 6.2.0
+ ts-loader 9.2.6
+ typescript 4.5.4
+ webpack 5.66.0
+ webpack-cli 4.9.1
+ webpack-dev-server 4.7.3
+ workbox-webpack-plugin 6.4.2
[webpack-cli] Project has been initialised with webpack!
```

```bash
webpack.config.base.ts   # webpack基础配置（被所有其他配置文件继承）
webpack.config.client.ts # csr配置
webpack.config.server.ts # ssr配置
webpackfile.ts           # mpa配置

# 以node方式启动webpack
npm run start [webpack config file path]

# 以node方式启动监听webpack
npm run watch [webpack config file path]

# 构建/监听/开发服务 csr/ssr/mpa配置
npm run [build/watch/serve]:[client/server/mpa]
```
