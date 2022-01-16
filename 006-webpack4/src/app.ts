import jsScript from '@/js/index.js'
import tsScript from '@/ts/script'
import mainVue from '@/vue/main-vue.js'
import miniCssExtractPluginPage from  '@/mini-css-extract-plugin/page.js'
import styles from './style/css-module.css';
import '@/style/style.css'
import '@/scss/style.scss'
import '@/less/style.less'
import avatarImg from '@/assets/avatar.png'

jsScript()
tsScript()
mainVue()
miniCssExtractPluginPage()

document.write(`<div class="${styles.title}">My Webpack app.</div> </br>`);   

document.write('IS_PRODUCTION: ' + IS_PRODUCTION);
document.write('<br />');
document.write('ENV_ID: ' + typeof ENV_ID);
document.write('<br />');
document.write('CONSTANTS: ' + JSON.stringify(CONSTANTS));

console.log(process.env.NODE_ENV)

console.log(avatarImg)
