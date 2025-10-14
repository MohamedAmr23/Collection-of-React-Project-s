import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import DatesCount from './components/DatesCount.jsx'
import {person} from './data.js'
import DatesList from './components/DatesList.jsx'
const App = () => {
  const [personData , setPersonData] = useState(person)
  return (
    <div className='color-body'>
      <Container className='py-5 '>
          <DatesCount  person = {personData}/>
          <DatesList person = {personData}/>
      </Container>
    </div>
  )
}

export default App