import React, { useState } from 'react'

const Form = () => {
  const [descripition , setDescripition] = useState('')
  const [quantaty , setQuantaty] = useState(5)
  function handleEvent(e){
    e.preventDefault()
    if(!descripition) return
    const newItem = {descripition , quantaty , packed:true , id:Date.now()}
    setDescripition('')
    setQuantaty(1)
  }
  return (
    <form className='add-form' onSubmit={handleEvent}>
      <h3>What do you know need for your trip</h3>
      <select value={quantaty} onChange={(e)=>setQuantaty(Number(e.target.value))}>
        {Array.from({length:20},(_,i)=>i+1).map((num)=>(
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <input type='text' value={descripition} onChange={(e)=>setDescripition(e.target.value)} placeholder='Add item ...'/>
      <button>Add</button>
    </form>
  )
}

export default Form