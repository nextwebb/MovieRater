import React, {useState, useEffect} from 'react';
import { API } from '../api-service'
import {useCookies} from 'react-cookie'

function Auth(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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


    return (
        <div>
            <label htmlFor="username">username</label><br/>
                <input id="username" type="text" placeholder="username" value={username} 
                onChange={ evt=> setUsername(evt.target.value)}
                /><br/>
            <label htmlFor="password">Password</label><br/>
                <input id="password" type="password" placeholder="password" value={password} 
                onChange={ evt=> setPassword(evt.target.value)}
                /><br/>
            <button onClick={loginClicked}>Login</button>
                        
        </div>
    )
}

export default Auth;