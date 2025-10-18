import React from 'react'
import Item from './item'
const initialItem = [
    {id:1 , desc:"test" , quantatity:2 , packed:true},
    {id:2 , desc:"test2" , quantatity:22 , packed:true},
    {id:3 , desc:"test3" , quantatity:23 , packed:false},
]
const PackingList = () => {
  return (
    <div className='list'>
      <ul>
        {initialItem.map((item)=>(
          <Item item={item}/>
        ))}
      </ul>
    </div>
  )
}

export default PackingList