import React from 'react'

const AccordianItem = ({num , title , text}) => {
    const [isOpen,setIsOpen] = React.useState(false);
  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={()=>setIsOpen(!isOpen)}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p  className="icon">{isOpen?"-":"+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  )
}

export default AccordianItem