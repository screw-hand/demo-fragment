import Style from './App.styl'
import HelloMessage from './multi-page/HelloMessage'

const cname = Style.root

import(/* webpackChunkName: "chunk_script" */ '../src/script.js').then(() => {
  console.log('1')
})

const App = () => {
  return (
    <div>
      <HelloMessage name='1' />
      <h1 className={cname}>Hello,Webpack</h1>
    </div>
  )
}

export default App
