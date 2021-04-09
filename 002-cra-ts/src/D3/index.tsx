import { useState } from 'react'
import * as util from './util'
import './style.css'

const Svg: React.FunctionComponent =  () => {
  return <svg style={{
    border: '1px solid gold'
  }} /> 
}

const Circle: React.FunctionComponent = () => {
  return <svg>
    <circle
      cx="150"
      cy="70"
      r="50"
    />
  </svg>
}

const Circles: React.FunctionComponent = () => {
  const [dataset, setDataset] = useState<util.IDataset>(util.generateDataset())

  util.useInterval(() => {
    const newDataset: util.IDataset = util.generateDataset()
    setDataset(newDataset)
  }, 2000)

  return <svg viewBox="0 0 100 50" >
    {dataset.map(([x, y], i) => (
      <circle
        cx={x}
        cy={y}
        r="3"
      />
    ))}
  </svg>
}


/**
 * https://wattenberger.com/blog/react-and-d3
 */

const D3 :React.FunctionComponent = () => (
  <>
    <div>
      <Svg />
    </div>
    <div>
      <Circle />
    </div>
    <div className="circles-container">
      <Circles />
    </div>
  </>
)

export default D3
