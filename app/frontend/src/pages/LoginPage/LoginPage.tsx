import * as React from 'react'
import Login from "../../components/Login/Login";
import './LoginPage.css'
import {NavigateFunction, useNavigate} from 'react-router-dom';

function LoginPage() {
    const navigate: NavigateFunction = useNavigate();

    const handleLogin = async (username: string, password: string) => {
        const response = await fetch('http://localhost:3001/verifyUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: username, plainTextPassword: password }),
        });

        if (response.ok) {
            navigate('/pos');
        } else {
            alert('Incorrect username or password');
        }
    }

    return (
        <div className='login-page'>
            <Login onLogin={handleLogin}></Login>
        </div>
    );
}

export default LoginPage;
