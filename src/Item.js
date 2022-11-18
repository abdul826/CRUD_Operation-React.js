import React from 'react'

const Item = (props) => {

  return (
    <>
    <div className="todo_style">
    <i className="ri-delete-bin-6-line" onClick={()=> {props.select(props.id)}}></i>
    <li>{props.itemVal}</li>
    </div>
    </>
    
  )
}

export default Item