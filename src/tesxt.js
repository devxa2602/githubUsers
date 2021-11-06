import React,{useState} from 'react'
import axios from "./axios"
function tesxt() {
    const[list,setList]= useState([])
    const onClickHandler=()=>{
axios.get("./api").then((res)=>setList(res))
    }
    return (
        <div>
            <input type="text" />
            <button onClick={onClickHandler}>Search</button>
            {list.length>0?(<ul>list.map((item)=><li>item</li>))</ul>}
        </div>
    )
}

export default tesxt
