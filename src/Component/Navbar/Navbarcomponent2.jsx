import React from 'react';
import { NavLink } from 'react-router-dom';
import nc2 from '../Navbar/navbarcomponent2.module.css'
function Navbarcomponent2() {
    const change=({isActive})=>{
        return{
            color: isActive? 'green':'coral',
            fontWeight: isActive? 'bold':'normal'
        }
    }
    return (  
        <div>
            <div className={nc2.item}>
                <NavLink to='/Body2' style={change}><label className={nc2.item1}>Users</label></NavLink>
            </div>
        </div>
    );
}

export default Navbarcomponent2;