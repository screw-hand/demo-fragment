import ReactDOM from 'react-dom'
import HelloMessage from './HelloMessage'
import isPagePath from './isPagePath'

console.log('pageA')

const run = () => {
  const div = document.createElement('div')
  div.id = 'pageA'
  document.body.appendChild(div)

  ReactDOM.render(
    <HelloMessage name="pageA" />,
    document.getElementById('pageA')
  )
}

isPagePath(run)

export default run
