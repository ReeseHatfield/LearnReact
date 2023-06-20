import './Login.css'
import * as React from "react";
import { DataBase } from "../../../../backend/database/DataBase";

function Login(){

    let db: DataBase = new DataBase;

    return (
        <div className="login-container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <button type="submit" className="loginBtn">Login</button>
        </div>
    )
}

export default Login;