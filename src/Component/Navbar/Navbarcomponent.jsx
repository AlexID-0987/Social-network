import React from 'react';
import { NavLink } from 'react-router-dom';
import nc from '../Navbar/navbarcomponent.module.css'
function Navbarcomponent() {
    const change=({isActive})=>{
        return{
            color: isActive? 'red':'coral',
            fontWeight: isActive? 'bold':'normal'
        }
    }
    return ( 
        <div>
            <h1>Navbar</h1>
             <div className={nc.item}>
                 <NavLink style={change} to='/Body'>News</NavLink>
             </div>
        </div>
     );
}

export default Navbarcomponent;