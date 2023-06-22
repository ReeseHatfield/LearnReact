import * as React from 'react';
import '../Buttons.css'

interface LogOutProps{
    onLogOut: () => void
}

function LogOutButton({onLogOut}: LogOutProps) {

    return (
        <div>
            <button
                type='button'
                className='util-btn'
                onClick={onLogOut}
            >Log Out</button>
        </div>
    );
}

export default LogOutButton;