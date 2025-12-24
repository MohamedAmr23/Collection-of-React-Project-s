import React, { useState } from 'react'
import Logo from './component/Logo'
import Form from './component/Form'
import PackingList from './component/PackingList'
import Stats from './component/Stats'
const App = () => {
  const [items,setItems] = useState([])
  function handleNewItems(item){
     setItems((items)=>[...items,item])
  }
  function handleDeleteItem(id){
    setItems((items)=>items.filter((item)=>item.id !== id))
  }

  function handleToggleItem(id){
    setItems((items)=>items.map((item)=>item.id === id ? {...item, packed:!item.packed} : item))
  }
  return (
    <div className='app'>
      <Logo/>
      <Form onAddItems={handleNewItems}/>
      <PackingList handleToggleItem={handleToggleItem} items={items} handleDeleteItem={handleDeleteItem}/>
      <Stats items={items}/>
    </div>
  )
}

export default App