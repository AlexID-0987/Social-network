import React from 'react';
import store from '../../../Reduce/Store';
import bc1 from '../Bitem1/body1.module.css'
import Bodyitem1 from '../Bitem1/Bodyitems1';
import Bodyitem2 from '../Bitem1/Bodyitems2';
const Body1 = (props) => {
    
    return (  
        <div className={bc1.item}>
           <Bodyitem1 Peoples={props.Peoples}/>
           <Bodyitem2 Arraymessage={props.Arraymessage} store={store} newmess={props.NewMessText} dispatch={props.dispatch.bind(props)}/>
        </div>
    );
}
 
export default Body1;