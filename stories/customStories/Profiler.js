import React, { useState } from 'react'

const Profiler = ({ children, component }) => {
  const [metrics, setMetrics] = useState({
    compName: '', // Profiler id
    mode: '', // can be mount or update
    actualTime: 0,
    baseTime: 0, // time Taken by react
    startTime: 0, // time at which render starts
    commitTime: 0, // the time at which React actually committed those changes to the renderer
  })

  const getMetrics = (
    compName,
    mode,
    actualTime,
    baseTime,
    startTime,
    commitTime,
  ) => {
    let data = {
      compName,
      mode,
      actualTime,
      baseTime,
      startTime,
      commitTime,
    }

    if (data.compName === metrics.compName) return

    setMetrics(data)
  }

  return (
    <>
      <ul style={{ textAlign: 'left' }}>
        <li>Component: {metrics.compName}</li>
        <li>Mode: {metrics.mode}</li>
        <li>Actual time: {metrics.actualTime.toFixed(4)}ms</li>
        <li>Base time: {metrics.baseTime.toFixed(4)}ms</li>
        {/* <li>Start time: {metrics.startTime.toFixed(4)}ms</li> */}
        {/* <li>Commit time: {metrics.commitTime.toFixed(4)}ms</li> */}
      </ul>
      <React.unstable_Profiler id={component} onRender={getMetrics}>
        {children}
      </React.unstable_Profiler>
    </>
  )
}

export default Profiler
