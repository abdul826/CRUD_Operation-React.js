import React, {useState} from 'react'
import "./style.css";
import Item from './Item'

const Apps = ()=>{

    const [item, setItem] = useState("");

    const [newItem, setNewItem] = useState([]);

    const inputEvent = (e) =>{
        setItem(e.target.value);
    }

    const result = ()=>{
        setNewItem((preVal)=>{
            return [...preVal, item]
        });

        setItem("");
    }

    const deleteItems = (id)=>{

        setNewItem((oldItem)=>{
            return oldItem.filter((arrElm, index)=>{
                return index !== id;
            })
        })
    }

    return (
        <>
           <div className="main_div">
               <div className="centre_div">
                   <br />
                   <h1>TODO LIST</h1>
                   <br />
                   <input type="text" placeholder='Add a Item' 
                   value={item}
                   onChange={inputEvent}
                   />
                   <button onClick={result}>+</button>
                   <ol>
                       {
                        newItem.map((val, index)=>{
                            return(
                               <Item 
                                key = {index}
                                id = {index}
                                itemVal = {val}
                                select = {deleteItems}
                               /> 
                            )
                        })
                       }
                   </ol>
               </div>
           </div>
        </>
      )
   
}



export default Apps;