import {useState} from 'react'
import { Activity } from 'lucide-react';
import { Percent } from 'lucide-react';
import { Play } from 'lucide-react';
import { ShieldX , TicketCheck, CircleOff ,Dumbbell} from 'lucide-react';
import bg from '../assets/bg2.jpg'
import logo from '../assets/logo.jpg'

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
        const quantity = ((riskinamount/(entry*10000-sl*10000).toFixed())*10000).toFixed()
        setquantitySize(quantity)
        setEntry(entry)
        setSl(sl)
        
        setpipdifference(pipdifference)
    }



    return(
        <div className="border w-full min-h-screen text-[#857c7c]" >
            
            <div className="appbox flex max-sm:flex-col justify-between border bg-center bg-cover h-screen "
    style={{ backgroundImage: `url(${bg})` }}>
                <img src={logo} className='h-50 w-20 absolute'></img>
                <h1 className='absolute right-[40%] top-3 text-[30px] font-bold'>Position Size Calculator</h1>


                <div className="inputbox  flex flex-col justify-center items-center m-20 gap-[8px] p-10 border border-[#857c7c] w-[450px]">
                    <div className="account">
                        <label className='flex gap-2 p-2 font-bold text-[20px]'><Activity/>Account Size</label>
                        <input onChange= {(event)=>setaccountSize(event.target.value)}className = "border rounded-[8px] w-[350px] h-[35px] bg-transparent p-3" value={accountSize} 
                        placeholder="Enter Account Size" type='number'></input>
                    </div>
                    <div className="r">
                        <label className='flex gap-2 p-2 font-bold text-[20px]'><Percent/>Risk</label>
                        <input className = "border rounded-[8px] w-[350px] h-[35px] bg-transparent p-3"placeholder='Enter Risk' type='number' onChange={(event)=>setrisk(event.target.value)}></input>
                    </div>
                    <div className="start">
                        <label className='flex gap-2 p-2 font-bold text-[20px]'><Play style={{color:"#19d225"}}/>Range Start</label>
                        <input onChange= {(event)=>setrangeStart(event.target.value)} className = "border rounded-[8px] w-[350px] h-[35px] bg-transparent p-3" type='number' placeholder="Enter range start"></input>
                    </div>
                    <div className="end">
                        <label className='flex gap-2 p-2 font-bold text-[20px]'><ShieldX style={{color:"red"}}/>Range end</label>
                        <input onChange= {(event)=>setrangeend(event.target.value)} className = "border rounded-[8px] w-[350px] h-[35px] bg-transparent p-3" type='number' placeholder="Enter range end"></input>
                    </div>
                    <div className="calculate">
                        <button onClick={()=>calculateEntry()} className='w-[150px] h-[40px] bg-[#d4d4d4] text-black rounded-[20px] m-5'>Calculate</button>
                    </div>
                    
                </div>
                <div className="resultbox border border-[#857c7c] m-20 w-[500px] flex flex-col justify-center p-8 gap-10">
                    <h1 className='text-[30px] font-bold font-sans'>Results</h1>
                    <div className="entry border border-black  rounded-[10px] bg-gradient-to-r from-transparent to-blue-500 text-white font-bold text-[25px] h-[75px] w-full flex p-5 items-center">
                        <h1 className='flex gap-3'><TicketCheck className='w-100'/>Entry Point <span><h1 className='text-black '>{entry}</h1></span></h1>
                    </div>
                    <div className="sl border border-black  text-white h-[75px] bg-gradient-to-r from-transparent to-blue-600 font-bold text-[25px] h-[75px] w-full flex p-5 items-center">
                        <h1 className='flex gap-3'><CircleOff/>SL<span className='text-black'>{sl}</span></h1>

                    </div>
                    <div className="quantity border border-black  h-[75px] bg-gradient-to-r from-transparent to-blue-500 text-white font-bold text-[25px] h-[75px] w-full flex  p-5 items-center">
                        <h1 className='flex gap-3'><Dumbbell/>Quantity<span className='text-black'>{quantitySize}</span></h1>
                    </div>
                   
                    
                
            </div>
                </div>
                
        
        </div>
    )
}

export default Calculator;