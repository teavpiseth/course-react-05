import React from 'react'
import MemorizeMemoComponent from './MemoComponent'

export default function ParentMemo() {
    const [counter, setCounter] = React.useState(0);
    const name= "pisal"
    const personDetail = {
        age: "20",
        study: "react"
    }
  return (
    <div>
        <button onClick={() => setCounter(counter+1)}>Counter: {counter}</button>
        <MemorizeMemoComponent name={name} personDetail={personDetail}/>
    </div>
    
  )
}
