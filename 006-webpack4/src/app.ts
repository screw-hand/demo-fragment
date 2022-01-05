// import addContent from './js/add-content.js'
// import './ts/script.ts'
import './style/style.css'
// import avatarImg from './assets/avatar.png'
// import './vue/main-vue.js'
// import './mini-css-extract-plugin/page.js'
// import './scss/style.scss'
// import './less/style.less'

import styles from './style/css-module.css';
// addContent()

// document.write('my first webpack app. <br />')
document.write(
  '<div class="container"><div class="title">My Webpack app.</div></div>'
  );
  
document.write(`<div class="${styles.title}">My Webpack app.</div> </br>`);   
  
  // console.log(avatarImg)