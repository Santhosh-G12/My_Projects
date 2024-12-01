import addicon from '../assets/icons/add.png'
import searchicon from '../assets/icons/search.png'
import completedtaskicon from '../assets/icons/task.png'
import pendingtask from '../assets/icons/time.png'
import {useState} from 'react'

const Dashboard = ()=>{

    const[taskName,settaskName] = useState('')
    const[taskDescription,settaskDescription] = useState('') 
    const[taskslist,settasksList] = useState([])
    const[isClickedAddtask,setisClickedAddtask] = useState(false);
    const[completedtasklist,setcompletedTasklist] = useState([]);

    const handletaskDetails = (e)=>{
       const field = e.target
       if(field.name ==='taskname'){
        settaskName(field.value) 
       }else{
            settaskDescription(field.value)
       }
       
    }
    //Adding Task to tasklists

    const handleAddtask =()=>{
        const newTask ={
            taskName : taskName,
            taskDescription : taskDescription
        }                                      //const newtask = {taskName,taskDescription}
        settasksList((prev)=>[...prev,newTask])
        settaskName('')
        settaskDescription('')
    }
   

    //Remove a task
    const handleDeleteTask = (index)=>{
        const list = [...taskslist]
        const updatedlist = list.filter((_,i)=>i!==index)
        settasksList(updatedlist)

        //complete
        const x = list.filter((_,i)=>i===index)[0]
        
        const y = [...completedtasklist,x]
        setcompletedTasklist(y)
        console.log(completedtasklist)
        
        
        
    }

    

    
    return (
        <div className="flex bg-[#1b1a1af3] min-h-screen">
            
            <div className="sticky top-0  border-2 h-screen w-[300px] p-5 flex flex-col justify-start ">
                <h1>Santhosh's Task</h1>
                <ul className='flex flex-col gap-5 mt-[50px]'>
                    <li onClick={()=>setisClickedAddtask(true)}className=' p-2 rounded-md flex items-start gap-1 hover:bg-[#463a3a]'><img className = 'h-[30px] w-[30px]'src={addicon} alt = 'add icon'/>Add Task</li>
                    <li className='p-2 rounded-md flex items-start ap-1 hover:bg-[#463a3a]'> <img src={searchicon} alt = 'add icon'/>Search</li>
                    <li className='p-2 rounded-md flex gap-1 hover:bg-[#463a3a]'> <img src={pendingtask} alt = 'add icon'/>Pending Tasks</li>
                    <li className='p-2 rounded-md flex gap-1 hover:bg-[#463a3a]'> <img src={completedtaskicon} alt = 'add icon'/>Completed Tasks</li>
                </ul>
            </div>
            <div className="bg-[#1a1a1a] w-full box-border">
                <div className=" bg-[#1a1a1a]  mt-[100px] m-[50px] min-h-[500px]">
                    <h1>Inbox</h1>
                    
                    <div className={`tasklistbox ${taskslist.length>0?'border':''} m-5`}>
                            {taskslist.map((tasks,index)=>(
                                <div key ={index} className="taskbox border-b m-5">
                        
                                    <h1> <div onClick ={()=>handleDeleteTask(index)} className=" hover:bg-green-500 w-5 h-5 border rounded-full flex justify-center items-center overflow-hidden"></div>
                                    {tasks.taskName}</h1>
                                    <p>{tasks.taskDescription}</p>
                                </div>
                            ))}
                    
          
                    </div>
                    {isClickedAddtask&&
                    <div className="addtaskbox border border-[#4b4b4b] flex flex-col">
                    <input onChange = {handletaskDetails} value={taskName} name = 'taskname' className= 'bg-transparent p-2 focus:outline-none ' placeholder='Task name'></input>
                    <input onChange = {handletaskDetails} value = {taskDescription} name = 'description' className= 'bg-transparent p-2 focus:outline-none text-[12px]' placeholder='Description'></input>
                    <button className=' bg-transparent border border-[#4b4b4b] w-[130px] h-[30px] rounded-md m-2 p'>Priortiy</button>
                    <footer className='border-t border-[#4b4b4b] flex justify-end gap-3 p-2'>
                        <button onClick={()=>setisClickedAddtask(false)} className=' bg-[#4b4b4b] p-2 w-[100px] rounded-md font-bold'>Cancel</button>
                        <button   disabled = {!taskName} onClick={()=>handleAddtask()} className={`${taskName ? 'bg-red-700' : 'bg-[#f1a9a2]'} p-2 w-[100px] rounded-md font-bold`}>Add Task</button>
                    </footer>
                    </div>
                    }
                    <div className="completedtask relative">
                        <h1 >Complted Tasks</h1>
                        {completedtasklist.map((task,index)=>(
                            <h1 key={index}>{task.taskName}</h1>
                        ))}
                    </div>
                    

                    
                </div>
            </div>
                
            </div>
            
    )
}

export default Dashboard;