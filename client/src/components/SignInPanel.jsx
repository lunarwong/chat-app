import React, { useState } from "react"

const LogInPanel = () => {

    const [currState, setCurrState] = useState("Sign up")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [bio, setBio] = useState("")
    const [dataSubmittted, setDataSubmittted] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (currState === 'Sign up' && !dataSubmittted) {
            setDataSubmittted(true)
            return;
        }
    }

    return (
        <form onSubmit={onSubmitHandler}
            className="border-1 border-amber-50 rounded-2xl
            sm:justify-evenly
            backdrop-blur-xl
            overflow-hidden 
            p-8
            flex flex-col gap-2
        ">
            <h1 className="text-2xl flex justify-between items-center">{currState}
                {dataSubmittted && <img onClick={() => setDataSubmittted(false)}
                src="./src/assets/icons/backIcon.PNG" className="w-7 h-7 cursor-pointer"/>}
            </h1>

            {currState === "Sign up" && !dataSubmittted && (
                <>
                    <input onChange={(e)=>setFullName(e.target.value)} value={fullName}
                        className=" flex flex-1 p-2 border border-gray-500 rounded-md focus:outline-none"
                        type="text" placeholder="Full Name" required/>
                    
                </>
                
            )}

            {!dataSubmittted && (
                <>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email}
                        className="p-2 border border-gray-500 rounded-md focus:outline-none
                            focus:ring-2 focus:ring-indigo-500"
                        type="email" placeholder="Email" required/>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password}
                        className="p-2 border border-gray-500 rounded-md focus:outline-none
                            focus:ring-2 focus:ring-indigo-500"
                        type="password" placeholder="Password" required/>
                </>
            )}

            {currState === "Sign up" && dataSubmittted && (
                    <>
                    <textarea onChange={(e)=>setBio(e.target.value)} value={bio} rows={4} 
                        className="p-2 border border-gray-500 rounded-md focus:outline-none
                        focus:ring-2 focus:ring-indigo-500" 
                        placeholder="provide a short bio about you" required></textarea>
                    </>
                )
            }

            <button type="submit" className="py-3 bg-gradient-to-r from-purple-400 to-violet-900
                 text-white rounded-md cursor-pointer">
                {currState === "Sign up" ? "Create Account" : "Login"}
            </button>
                
            <div className="flex items-center gap-2 text-sm text-gray-700">
                    <input type="checkbox" />
                    <label>I agree to the terms of use & privacy policy.</label>
            </div>

            <div className="flex flex-col gap-2">
                {currState === "Sign up" ? (
                    <p className="text-sm text-violet-800">Already have an account ? 
                    <span onClick={()=>{setCurrState("Login"); setDataSubmittted(false)}}
                        className="text-amber-200 cursor-pointer"> Login here</span></p>
                ): (
                    <p className="text-sm text-violet-800">Don't have an account yet ? 
                    <span onClick={()=>setCurrState("Sign up")}
                        className="text-amber-200 cursor-pointer"> Create here</span></p>
                )}
            </div>
            
        </form>
    )
}

export default LogInPanel