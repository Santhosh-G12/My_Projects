const LoginPage = ()=>{
    return(
        <div className="loginpage flex flex-col justify-center items-center  bg-white w-full h-screen">
            <div className='text-[#dc4c3e] text-[30px] font-bold font-poppins'>TodoList</div>
            <div className="flex flex-col justify-between gap-2   w-[500px] p-3 h-[500px] ">
                <header className='text-black text-[20px] '>
                    Log In
                </header>
                <div className=" flex flex-col border border-grey  p-2 gap-2 rounded-[10px]">
                    <label className='text-[12px]' for= 'username'>Email</label>
                    <input 
                        className='focus:outline-none'
                        placeholder = 'Enter your email...'
                        id ='username'
                        type ='email'
                    />
                </div>
                <div className=" flex flex-col border border-grey  p-2 gap-2 rounded-[10px]">
                    <label className='text-[12px]' for= 'password'>Password</label>
                    <input 
                       className='focus:outline-none'
                        placeholder='Enter your Password...'
                        id= 'password'
                        min-length = '8'
                    />

                </div>
               
                <button className="bg-[#dc4c3e] h-[50px] rounded-lg text-white text-[20px]">
                    Log In
                </button>
                <div className="flex flex-col gap-4">

                    <a className='text-[#f87468] underline' href='#'>Forgot your password?</a>
                    <p className='text-[13px]'>By continuing with Google, Apple, or Email, you agree to Todoist’s <span className='underline'>Terms of Service</span> and <span className='underline'>Privacy Policy.</span></p>
                    <p className='flex justify-end  pr-10 text-[13px]'>Don’t have an account? {' '} <a className = 'underline' href='#'>Sign Up</a></p>

                </div>
            </div>
                

            
        </div>
    )
}
export default LoginPage;