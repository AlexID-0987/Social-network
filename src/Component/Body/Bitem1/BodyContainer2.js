import React from 'react';
import { updateNewMess,sendMessage } from '../../../Reduce/Body-reduser';

import Bodyitem2 from "./Bodyitems2";

function BodyitemContainer2(props) {

    let onSendMessage=()=>{
        props.dispatch(sendMessage())

    }
    let onNewmesschange=(body)=>{

        props.dispatch(updateNewMess(body))
    }
    return (
        <div>
           <Bodyitem2 updateNewBody={onNewmesschange} sendMess={onSendMessage}
                      store={props.store} Arraymessage={props.Arraymessage}
                      newmess={props.newmess} dispatch={props.dispatch.bind(props)}/>
        </div>
    );
}

export default BodyitemContainer2;