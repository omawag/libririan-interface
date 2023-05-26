
import React , {useState}from "react";
import "../components/style/Login.css"

    const Login=(props)=>{
        const[email,setEmail]=useState('')
        const[password,setPassword]=useState('')
        const handelSubmit=(e)=>{
            e.preventDefult();
            console.log(email);
        }

        return (
            <div className="ll">
                <div className="login">
                <h1>Login for librian </h1>
                    <form onSubmit={handelSubmit}> 
                        <label for ="email"><h3><i>email</i></h3></label>
                        <input value={email} onChange={(e)=> setEmail(e.target.value)}type="email" placeholder="Enter your email"></input>
                        <label for ="password"><h3><i>password</i></h3></label>
                        <input value={password} onChange={(e)=> setPassword(e.target.value)}type="password" placeholder="Password"></input>
                        <button className="log" type="submit"><b>Login</b></button>
                    
                </form>
            
                </div>  
            
            </div>
            
        )
        

};
    export default Login;