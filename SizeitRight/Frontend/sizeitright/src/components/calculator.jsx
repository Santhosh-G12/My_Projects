import {useState} from 'react'
import { Activity } from 'lucide-react';
import { Percent } from 'lucide-react';
import { Play } from 'lucide-react';
import { ShieldX } from 'lucide-react';



const Calculator = ()=>{

    const [accountSize,setaccountSize] = useState(5000)
    const [risk,setrisk] = useState(0.5)
    const [rangeStart ,setrangeStart] = useState(1.05650)
    const [rangeend ,setrangeend] = useState(1.05850)
    const [entry,setEntry] = useState('')
    const [sl,setSl] = useState('')
    const [quantitySize,setquantitySize] = useState('')
    const [pipdifference,setpipdifference]  =useState('')
    

    const calculateEntry = ()=>{
        //Buy function
        const pipdifference = (rangeend*10000-rangeStart*10000).toFixed()
        const riskinamount = (accountSize*risk/100)
        
       
        const entry = Number(rangeStart)+Number((pipdifference*0.4).toFixed()/10000)
        const sl = Number(rangeStart)+Number((pipdifference*0.1).toFixed()/10000)
        setEntry(entry)
        setSl(sl)
        setquantitySize(quantitySize)
        setpipdifference(pipdifference)
    }



    return(
        <div className="border border-red-400 h-screen w-full bg-[#c9c6c6]">
            <div className="appbox  flex justify-between h-full border bg-[#e8eef3] shadow-[10px_15px_12px_rgba(0,0,0,0.6)] ">
                <div className="inputbox  flex flex-col justify-center items-center m-20 gap-[8px] p-10 border border-green-500">
                    <div className="account">
                        <label className='flex gap-2 p-2'><Activity/>Account Size</label>
                        <input onChange= {(event)=>setaccountSize(event.target.value)}className = "border rounded-[8px] w-[300px] h-[35px]" value={accountSize} 
                        placeholder="Enter Account Size" type='number'></input>
                    </div>
                    <div className="r">
                        <label className='flex gap-2 p-2'><Percent/>Risk</label>
                        <input className = "border rounded-[8px] w-[300px] h-[35px]"placeholder='Enter Risk' type='number' onChange={(event)=>setrisk(event.target.value)}></input>
                    </div>
                    <div className="start">
                        <label className='flex gap-2 p-2'><Play style={{color:"#19d225"}}/>Range Start</label>
                        <input onChange= {(event)=>setrangeStart(event.target.value)} className = "border rounded-[8px] w-[300px] h-[35px]" type='number' placeholder="enter range start"></input>
                    </div>
                    <div className="end">
                        <label className='flex gap-2 p-2'><ShieldX style={{color:"red"}}/>Range end</label>
                        <input onChange= {(event)=>setrangeend(event.target.value)} className = "border rounded-[8px] w-[300px] h-[35px]" type='number' placeholder="enter range end"></input>
                    </div>
                    <div className="calculate">
                        <button onClick={()=>calculateEntry()} className='w-[100px] h-[30px] bg-[#4dabe9] rounded-xl'>Calculate</button>
                    </div>
                    
                </div>
                <div className="resultbox border border-red-700 m-20 w-[500px] flex flex-col justify-center p-5 gap-10">
                    <div className="entry border border-black bg-gradient-to-r from-blue-500 to-purple-600  w-full">
                        <h1>Entry Point <span><h1 className='text-black'>{entry}</h1></span></h1>
                    </div>
                    <div className="sl border border-black">
                        <h1>SL<span>{sl}</span></h1>

                    </div>
                    <div className="quantity border border-black">
                        <h1>Quantity<span>{quantitySize}</span></h1>
                    </div>
                    <div className="pip border border-black">
                        <h1>Pip Difference{pipdifference}</h1>
                    </div>
                    
                
            </div>
                </div>
                
        
        </div>
    )
}

export default Calculator;