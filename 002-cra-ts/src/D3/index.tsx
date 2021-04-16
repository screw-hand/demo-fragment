import { useState } from 'react'
import * as util from './util'
import * as d3 from 'd3'
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
        key={`${x} ${y}`}
      />
    ))}
  </svg>
}

const Area: React.FunctionComponent = () => {
  type PaddingType = {
    top: number,
    right: number,
    bottom: number,
    left: number
  }

  const [dataset, setDatSet] = useState<Array<number>>([50, 43, 120, 87, 99, 167, 142]);
  const Width: number = 400
  const Height: number = 400
  const padding: PaddingType = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
  }
  let reactStep: number = 35
  let reactWidth: number = 30

  const mySort: Function = (): void => {
    let newDataset: Array<number> = [...dataset]
    newDataset.sort(d3.ascending)
    setDatSet(newDataset)
  }

  const myAdd: Function = (): void => {
    let newDataset: Array<number> = [...dataset]
    newDataset.push(Math.floor(Math.random() * 100))
    setDatSet(newDataset)
  }


  return (
    <>
      <svg width={Width} height={Height}>
        {
          dataset.map((d, i) => { 
            const x: number = padding.left + i * reactStep
            const y: number = Height - padding.bottom - d
            const ReactElement:React.FunctionComponent  = () => (
              <rect
                key={`${d}+${i}`}
                fill="steelblue"
                x={x}
                y={y}
                width={reactWidth}
                height={d}
              >
              </rect> as JSX.Element
            )
            const TextElement:React.FunctionComponent = () => (
              <text
                fill="white"
                fontSize="14px"
                textAnchor="middle"
                x={x}
                y={y}
                dx={reactWidth / 2}
                dy="1em"
              >
                {d}
              </text> as JSX.Element
            )
            // console.log({
            //   d, i, x, y
            // })
            return (
              <>
                <ReactElement/>
                <TextElement/>
              </>
            )
          })
        }
      </svg>
      <div>
        <button type="button" onClick={() => mySort()}>排序</button>
        <button type="button" onClick={() => myAdd()}>增加数据</button>
      </div>
    </>
  )
}

// 比例尺
const Scale: React.FunctionComponent = () => { 
  const width: number = 600
  const height: number = 600
  const color: readonly string[] = d3.schemeCategory10
  const dataset: number[] = d3.range(5)

  // 线性比例尺
  // const linear = d3.scaleLinear().domain([0, 20]).range([0, 100])
  // console.log([
  //   linear(10),
  //   linear(30)
  // ])
  // let color = d3.schemeCategory10
  // console.log(color)

  return <svg width={width} height={height}>
    {dataset.map((x,i) => {
      return <circle key={x} cx={30 + i * 80} cy={100} r={30} fill={color[i]}></circle>
    })}
  </svg>
}

// 坐标轴
const Axis: React.FunctionComponent = () => {
  const width: number = 600
  const height: number = 600
  
  // 线性比例尺
  // const xScale = d3.scaleLinear().domain([0, 10]).range([0, 300])
  // const axis = d3


  return <svg width={width} height={height}></svg>
}

/**
 * https://wattenberger.com/blog/react-and-d3
 */

const D3 :React.FunctionComponent = () => (
  <>
    { false && <>
    <div>
      <Svg />
    </div>
    <div>
      <Circle />
    </div>
    <div className="circles-container">
      <Circles />
    </div>
    </>}
    <div>
      <Area />
    </div>
    <div>
      <Scale />
    </div>
    <div>
      <Axis />
    </div>
  </>
)

export default D3
