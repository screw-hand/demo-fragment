export default function () {
  // document.write('I\'m using a config file! </br>')
  document.write('I\'m using webpack-dev-server </br>')
  // document.write('This is from live-reloading! </br>')

  document.write(
    (global._babelPolyfill ?
      'added babel-polyfill' :
      'no global babel-polyfill'
    ) + ' </br>'
  )
}
