import React from 'react';
import store from '../../../Reduce/Store';
import bc1 from '../Bitem1/body1.module.css'
import Bodyitem1 from '../Bitem1/Bodyitems1';
import BodyContainer2 from "./BodyContainer2";
const Body1 = (props) => {

    return (  
        <div className={bc1.item}>
           <Bodyitem1 Peoples={props.Peoples}/>
           <BodyContainer2 store={store} Arraymessage={props.Arraymessage} newmess={props.NewMessText} dispatch={props.dispatch}/>
        </div>
    );
}
 
export default Body1;