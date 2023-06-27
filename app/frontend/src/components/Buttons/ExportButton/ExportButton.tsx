import * as React from 'react';


interface ExportButtonProps{
    onClick: () => void
}

function ExportButton({onClick}: ExportButtonProps) {
    return (
        <div>
            <button
                type='button'
                className='util-btn'
                onClick={onClick}
            >
                Export Data
            </button>
        </div>
    );
}

export default ExportButton;