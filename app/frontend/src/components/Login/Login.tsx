import './Login.css'
import * as React from "react";
import { useState } from "react";

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

function Login({ onLogin }: LoginProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.currentTarget.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }

    const handleBtnClick = (event: React.FormEvent) => {
        event.preventDefault();

        console.log("handling click event");
        if(username === 'Admin' && password === 'Admin'){
            //alert("Logged in");
            onLogin(username, password);
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleBtnClick}>
                <label htmlFor="uname"><b>Username</b></label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    name="uname"
                    required
                    onChange={handleUsernameChange}
                />

                <label htmlFor="psw"><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    onChange={handlePasswordChange}
                    required
                />

                <button type="submit" className="loginBtn">Login</button>
            </form>
        </div>
    )
}

export default Login;
