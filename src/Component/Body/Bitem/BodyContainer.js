import React from 'react';
import "../Bitem/body.css"
import { actionCreiterAddPost,actionCreiterUpdatePost } from '../../../Reduce/Body-reduser';
import Body from "./Body";
import {connect} from "react-redux";
const mapStateToProps=(state)=>{
    return{
        Arr:state.Statebody.Array,
        newPostText:state.Statebody.NewPostText
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        actionCreiterUpdate:(newtext1)=>{
            let newaction=actionCreiterUpdatePost(newtext1)
            dispatch(newaction);
        },
        visib:()=>{
            dispatch(actionCreiterAddPost());
        }
    }
}
const BodyContainer=connect(mapStateToProps, mapDispatchToProps)(Body)
export default BodyContainer;