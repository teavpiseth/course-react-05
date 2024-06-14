/* eslint-disable react/prop-types */
import React from 'react'

export default function TodoList({list}) {
  return (
    <div>
        {list.map((item, index) => {
            return <p key={item + index}>{item}</p>
        })}
    </div>
  )
}
