import React, {useState, useEffect} from 'react';
import { API } from '../api-service'
import {useCookies} from 'react-cookie'

function Auth(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogginView, setIsLoginView] = useState(true)
    const [token, setToken] = useCookies(['mr-token']);

    // this hook listens for channges to the "token" cookie data
    // check if we have token
    useEffect(() => {
        console.log(token['mr-token']);
        if(token['mr-token']) window.location.href = "/movies";
    },[token])

    const loginClicked = () => {
        API.loginUser({username,password})
        .then((resp) => setToken('mr-token', resp.token) )
        .catch((err) => console.log(err))
    }

    const registerClicked = () => {
        API.registerUser({username,password})
        .then(() => loginClicked() )
        .catch((err) => console.log(err))
    }

    const isDisabled = username.length === 0 || password.length === 0

    return (
        
        <div className="App">
            <header className="App-header">
                 {isLogginView ? <h1>Login</h1> : <h1>Register</h1>}
             </header>
            <div className="login-container">
                <label htmlFor="username">username</label><br/>
                    <input id="username" type="text" placeholder="username" value={username} 
                    onChange={ evt=> setUsername(evt.target.value)}
                    /><br/>
                <label htmlFor="password">Password</label><br/>
                    <input id="password" type="password" placeholder="password" value={password} 
                    onChange={ evt=> setPassword(evt.target.value)}
                    /><br/>
                    { isLogginView ?  
                    <button onClick={loginClicked} disabled={isDisabled}>Login</button> : 
                    <button onClick={registerClicked} disabled={isDisabled}>Register</button>
                    }
                        {/* the loginview state is set to "login" by default, but on click it the state is set "register"  */}
                    { isLogginView ? 
                        <p onClick={()=>setIsLoginView(false)}>You don't have an account? Register here!</p>:
                        <p onClick={()=>setIsLoginView(true)}>You already have an account? Login here  </p>
                    }
                </div>
        </div>
    )
}

export default Auth;