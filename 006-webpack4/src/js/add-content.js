export default function () {
  // document.write('I\'m using a config file! </br>')
  console.log('I\'m using webpack-dev-server </br>')
  // document.write('This is from live-reloading! </br>')

  console.log(
    (global._babelPolyfill ?
      'added babel-polyfill' :
      'no global babel-polyfill'
    ) + ' </br>'
  )
}

const dieCode = () => {
  console.log('死代码，没有被任何模块引用')
}
