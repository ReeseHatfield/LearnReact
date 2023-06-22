import * as React from 'react'
import Login from "../../components/Login/Login";
import './LoginPage.css'
import {NavigateFunction, useNavigate} from 'react-router-dom';

function LoginPage() {
    const navigate: NavigateFunction = useNavigate();
    //navigate can only be used in as a child of a Router

    const handleLogin = (username: string, password: string) => {
        if (username === 'Admin' && password === 'Admin') {
            navigate('/pos');
        }
    }

    return (
        <div className='login-page'>
            <Login onLogin={handleLogin}></Login>
        </div>
    );
}

export default LoginPage;
