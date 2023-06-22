import * as React from 'react';
import './LogOutButton.css'

interface LogOutProps{
    onLogOut: () => void
}

function LogOutButton({onLogOut}: LogOutProps) {

    return (
        <div>
            <button type='button' className='log-out-btn' onClick={onLogOut}></button>
        </div>
    );
}

export default LogOutButton;