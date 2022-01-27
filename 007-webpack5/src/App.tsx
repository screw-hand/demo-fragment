import Style from './App.styl'
import HelloMessage from './multi-page/HelloMessage'
import './script'

const cname = Style.root

const App = () => {
  return (
    <div>
      <HelloMessage name='1' />
      <h1 className={cname}>Hello,Webpack</h1>
    </div>
  )
}

export default App
