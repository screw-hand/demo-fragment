import addContent from './js/add-content.js'
import './ts/script.ts'
import './vue/main-vue.js'
import './mini-css-extract-plugin/page.js'
import './style/style.css'
import styles from './style/css-module.css';
import './scss/style.scss'
import './less/style.less'
import avatarImg from './assets/avatar.png'
import * as multiPage from './multi-page/index.js'

addContent()

document.write(
  '<div class="container"><div class="title">My Webpack app.</div></div>'
  );
  
document.write(`<div class="${styles.title}">My Webpack app.</div> </br>`);   
  
console.log(avatarImg)

console.log(multiPage)