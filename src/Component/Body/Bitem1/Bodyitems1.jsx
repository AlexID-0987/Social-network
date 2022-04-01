import React from 'react';
import { NavLink } from 'react-router-dom';
import bi1 from '../Bitem1/bodyitems1.module.css'


const Bodyitem3=(props)=>{
   let path='/body1/' + props.id
   return(
      <div className={bi1.item1}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
      
   )
}

/* let Peoples=[
   {id:2,name:'Alex'},
   {id:5,name:'Oleg'},
   {id:45,name:'Helga'}
] */


function Bodyitem1(props) {
   let Bodypeoples=props.Peoples.map(person=><Bodyitem3 id={person.id} name={person.name}/>)
    return ( 
       <div className={bi1.item}>
          {Bodypeoples}
       </div>
     );
}

export default Bodyitem1;