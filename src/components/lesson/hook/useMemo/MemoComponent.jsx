/* eslint-disable react/prop-types */
import deepEqual from 'deep-equal'
import React from 'react'

 function MemoComponent({name, personDetail}) {
  console.log("memo")
  return (
    <div>
      name: {name}
      <br/>
      age: {personDetail.age}
      <br/>
      study: {personDetail.study}
    </div>
  )
}

const MemorizeMemoComponent = React.memo(MemoComponent, arePropsEqual)

function arePropsEqual(oldProps, newProps) {
  // console.log({oldProps}, {newProps})
  return deepEqual(oldProps, newProps)
}
export default MemorizeMemoComponent
