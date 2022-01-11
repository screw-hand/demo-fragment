import ReactDOM from 'react-dom';
import HelloMessage from "./HelloMessage";
import isPagePath from './isPagePath';

const run = () => {
  const div = document.createElement('div')
  div.id = 'pageC'
  document.body.appendChild(div)

  ReactDOM.render(
    <HelloMessage name="pageC" />,
    document.getElementById('pageC')
  )
}

isPagePath(run)

export default run 
