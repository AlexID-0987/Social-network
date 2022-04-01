import React from 'react';
import { NavLink } from 'react-router-dom';
import nc1 from '../Navbar/navbarcomponent1.module.css'
function Navbarcomponent1() {
     const change=({isActive})=>{
          return{
              color: isActive? 'blue':'white',
              fontWeight: isActive? 'bold':'normal'
          }
      }
    return ( 
         <div>
              <div className={nc1.item}>
                   <NavLink to='/Body1' style={change}><label className={nc1.item1}>Progress</label></NavLink>
              </div>
         </div>
     );
}

export default Navbarcomponent1;