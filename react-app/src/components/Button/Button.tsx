import './Button.css'
function Button(){
    return <button
        type='button'
        className='btn' onClick={() => alert('You clicked that button')}>Click Here</button>
}

export default Button