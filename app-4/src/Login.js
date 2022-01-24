import React, {useState} from "react";

function Login(){
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')

    const handleLogin = (e) =>{
        setLogin(e.target.value)
        console.log(`username is: ${e.target.value}`)
    }

    const handlePass = (e) =>{
        setPass(e.target.value)
        console.log(`pass is: ${e.target.value}`)
    }

    const handleClick = (e) =>{
        e.preventDefault()
        let user = login;
        let password = pass;
        alert(`username: ${user}, password: ${password}`)
    }

    return(
        <form>
            <input
                type='text' placeholder='username'
                onChange={(e)=>handleLogin(e)}/>
            <input
                type='password'
                onChange={(e)=>handlePass(e)}/>
            <button onClick={(e)=>handleClick(e)}>Login</button>
        </form>
    )
}

export default Login;