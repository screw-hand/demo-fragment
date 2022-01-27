import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>, window.document.getElementById('app'))

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept()
}
