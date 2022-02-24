import React from 'react'
import { Link } from "react-router-dom";
import './NotFound.css'

function NotFound() {
    return (
        <div className='not-found'>
                <h1>Lost your way?</h1>
                <p>Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                <Link to='Home' className='btn'>Home page</Link>
        </div>
    )
}

export default NotFound