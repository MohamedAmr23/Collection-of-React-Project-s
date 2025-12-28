import React from 'react'
import AccordianItem from './AccordianItem'

const Accordion = ({data}) => {
  return (
    <div className='accordion'>
        {data.map((item,index)=>(
            <AccordianItem num={index} title={item.title} text={item.text} key={index}/>
        ))}
        
    </div>
  )
}

export default Accordion