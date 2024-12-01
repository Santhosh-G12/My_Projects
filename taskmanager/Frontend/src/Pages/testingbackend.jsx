import { useState } from "react";
const Backend = ()=>{
    const[namelist,setnamelist] = useState([])
    const [enteredName,setEnteredName] = useState('')

    const addList =()=>{
        const updatedList = [...namelist,enteredName]

        setnamelist(updatedList)
        setEnteredName('')
        console.log(updatedList)
        
    }

    return(
        <div className="h-screen w-full flex justify-center items-center">
            <input onChange= {(e)=>setEnteredName(e.target.value)} value={enteredName} className = 'border text-black' placeholder="StudentName"></input>
            <button onClick={()=>addList()}className="border text-black">Submit</button>
        </div>
    )
}

export default Backend;