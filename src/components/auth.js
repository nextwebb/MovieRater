import React, {useState} from 'react';
import { API } from '../api-service'

function Auth(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginClicked = () => {
        API.loginUser({username,password})
        .then((resp) => console.log(resp.token))
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