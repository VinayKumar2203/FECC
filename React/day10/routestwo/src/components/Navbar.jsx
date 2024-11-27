import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    let navigate = useNavigate()
    return (
        <div>
            <h1>Navbar</h1>
            <Link navigate={'/'} >  Home</Link>
            <button onClick={()=>{navigate('/')}}>Home</button>
            <button onClick={()=>{navigate('/about')}}>About</button>
            <button onClick={()=>{navigate('/contact')}}>Contact</button>
            <button onClick={()=>{navigate('/products')}}>product</button>
            <Link to='/about'>About</Link>
            <Link to='/products'>Product</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default Navbar
