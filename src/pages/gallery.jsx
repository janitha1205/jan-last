import React from 'react'
import {Link} from 'react-router-dom';
export default function Gallery(){

return (
    <div>
        <h1>First Gallery</h1>
        <Link to='/about'>About Us</Link><br/>
        <Link to='/'>Home</Link>
    </div>);
}