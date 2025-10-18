import React from 'react'
const Item = ({item}) => {
  return (
    <li >
        <span style={item.packed ? {textDecoration:'line-through'} : {}}>{item.quantatity} {item.desc} </span>
        <button>❌</button>
    </li>
  )
}

export default Item