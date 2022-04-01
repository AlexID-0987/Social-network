import React from 'react';
import '../Navbar/navbar.css'
import Navbarcomponent from '../Navbar/Navbarcomponent';
import Navbarcomponent1 from '../Navbar/Navbarcomponent1';
import Navbarcomponent2 from '../Navbar/Navbarcomponent2';
 function Navbar() {
     return ( 
         
         <div className='navbar'>
           <Navbarcomponent/>
           <Navbarcomponent1/>
           <Navbarcomponent2/>  
         </div>
         
      );
 }
 
 export default Navbar;