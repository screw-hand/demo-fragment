import jsScript from './js/index.js'
// @ts-ignore An import path cannot end with a '.ts' extension. Consider importing './ts/script' instead.ts(2691)
import tsScript from './ts/script.ts'
import mainVue from './vue/main-vue.js'
import miniCssExtractPluginPage from  './mini-css-extract-plugin/page.js'
import styles from './style/css-module.css';
import './style/style.css'
import './scss/style.scss'
import './less/style.less'
import avatarImg from './assets/avatar.png'
import * as multiPage from './multi-page/index.js'

jsScript()
tsScript()
mainVue()
miniCssExtractPluginPage()

document.write(`<div class="${styles.title}">My Webpack app.</div> </br>`);   

Object.keys(multiPage).forEach(k => {
  multiPage[k]()
})

document.write('IS_PRODUCTION: ' + IS_PRODUCTION);
document.write('<br />');
document.write('ENV_ID: ' + typeof ENV_ID);
document.write('<br />');
document.write('CONSTANTS: ' + JSON.stringify(CONSTANTS));

// @ts-ignore
console.log(process.env.NODE_ENV)

console.log(avatarImg)
