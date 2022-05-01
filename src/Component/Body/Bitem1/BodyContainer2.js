import React from 'react';
import { updateNewMess,sendMessage } from '../../../Reduce/Body-reduser';
import Bodyitem2 from "./Bodyitems2";
import {connect} from "react-redux";

const mapStateToProps=(state)=>{
    return {
        Arraymessage:state.Statebody.Arraymessage,
        newmess:state.Statebody.NewMessageText,
    }
}
const mapDispathcToProps=(dispatch)=>{
    return {
        updateNewBody:(body)=>{dispatch(updateNewMess(body))},
        sendMess:()=>{dispatch(sendMessage())}
    }
}
const BodyContainer2=connect(mapStateToProps,mapDispathcToProps)(Bodyitem2)
export default BodyContainer2;