import React, { useState } from 'react'

function Qube() {
    const[count,setCount]=useState(0)
    const d=(num)=>{
        console.log("function call")//ye onchange pr har baar re-render ho raha hai means bar bar function bhi call ho raha hai isko rokane ke liye usememo ka use karenge
    
    return Math.pow(num,3)
}
    const result = d(count)
  return (
    <div>
      <input type="text" value={count} onChange={(e)=>setCount(e.target.value)} />
    </div>
  )

}

export default Qube

