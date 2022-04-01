import React from 'react';
import hcomp from '../Header/headercomp.module.css'
function Headercomponent() {
    return ( 
        <div className={hcomp.item}>
           <div className={hcomp.item1}>
               <img src='https://cdn-icons-png.flaticon.com/512/145/145843.png'/>
               <span className={hcomp.text}>
                   <label className={hcomp.text1}>"No pain no gain!"</label>
               </span>
           </div>
        </div>
     );
}

export default Headercomponent;