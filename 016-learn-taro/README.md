```
> $ taro init learn-taro                                                                                                                           
👽 Taro v3.6.1
Taro 即将创建一个新项目!
Need help? Go and open issue: https://tls.jd.com/taro-issue-helper

? 请输入项目介绍 project dest
? 请选择框架 Vue3
? 是否需要使用 TypeScript ？ Yes
? 请选择 CSS 预处理器（Sass/Less/Stylus） Sass
? 请选择编译工具 Webpack5
? 请选择包管理工具 pnpm
? 请选择模板源 Gitee（最快）
✔ 拉取远程模板仓库成功！
? 请选择模板 vue3-NutUI4（使用 NutUI4.0 的模板）

✔ 创建项目: learn-taro
✔ 创建文件: /Users/wu/Documents/code/demo-fragment/learn-taro/.gitignore
✔ 创建文件: /Users/wu/Documents/code/demo-fragment/learn-taro/babel.config.js
✔ 创建文件: /Users/wu/Documents/code/demo-fragment/learn-taro/package.json
✔ 创建文件: /Users/wu/Documents/code/demo-fragment/learn-taro/project.config.json  
✔ 创建文件: /Users/wu/Documents/code/demo-fragment/learn-taro/project.tt.json
✔ 创建文件: /Users/wu/Documents/code/demo-fragment/learn-taro/tsconfig.json
✔ 创建文件: /Users/wu/Documents/code/demo-fragment/learn-taro/config/dev.js
✔ 创建文件: /Users/wu/Documents/code/demo-fragment/learn-taro/config/index.js
✔ 创建文件: /Users/wu/Documents/code/demo-fragment/learn-taro/config/prod.js
✔ 创建文件: /Users/wu/Documents/code/demo-fragment/learn-taro/types/global.d.ts
✔ 创建文件: /Users/wu/Documents/code/demo-fragment/learn-taro/types/vue.d.ts
✔ 创建文件: /Users/wu/Documents/code/demo-fragment/learn-taro/src/app.config.ts
✔ 创建文件: /Users/wu/Documents/code/demo-fragment/learn-taro/src/app.scss
✔ 创建文件: /Users/wu/Documents/code/demo-fragment/learn-taro/src/app.ts
✔ 创建文件: /Users/wu/Documents/code/demo-fragment/learn-taro/src/index.html
✔ 创建文件: /Users/wu/Documents/code/demo-fragment/learn-taro/src/pages/index/index.config.ts                                                                          
✔ 创建文件: /Users/wu/Documents/code/demo-fragment/learn-taro/src/pages/index/index.vue                                                                                

...

mv README.md 016-learn-taro/
```

```
> $ pnpm add -D @tarojs/cli
 WARN  deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
 WARN  deprecated babel-eslint@8.2.6: babel-eslint is now @babel/eslint-parser. This package will no longer receive updates.
 WARN  deprecated core-js@2.6.12: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual version of core-js.
 WARN  deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
 WARN  deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
 WARN  deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
 WARN  deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
 WARN  deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
Already up to date
Progress: resolved 1253, reused 1224, downloaded 0, added 0, done
 WARN  Issues with peer dependencies found
.
└─┬ @tarojs/webpack5-runner 3.6.1
  ├── ✕ missing peer postcss@^8.4.18
  ├─┬ postcss-import 14.1.0
  │ └── ✕ missing peer postcss@^8.0.0
  ├─┬ postcss-loader 7.0.2
  │ └── ✕ missing peer postcss@"^7.0.0 || ^8.0.1"
  ├─┬ postcss-url 10.1.3
  │ └── ✕ missing peer postcss@^8.0.0
  ├─┬ postcss-html-transform 3.6.1
  │ └── ✕ missing peer postcss@^8.4.18
  ├─┬ postcss-plugin-constparse 3.6.1
  │ └── ✕ missing peer postcss@^8.4.18
  └─┬ postcss-pxtransform 3.6.1
    └── ✕ missing peer postcss@^8.4.18
Peer dependencies that should be installed:
  postcss@">=8.4.18 <9.0.0"  

Done in 4.2s
``