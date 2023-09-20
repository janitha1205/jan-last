import React from 'react'
import {Link} from 'react-router-dom';
export default function About(){

return (
    <div>
        <h1>First about</h1>
        <Link to='/gallery'>Gallery</Link><br/>
        <Link to='/'>Home</Link>
    </div>);
}
//<link to='/about' >About Us</link>
//<link to='/gallery' >Gallery</link>
 //<link to='/home' >Home</link>
