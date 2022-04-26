import React from 'react';
import "../Bitem/body.css"
import { actionCreiterAddPost,actionCreiterUpdatePost } from '../../../Reduce/Body-reduser';
import Body from "./Body";
function BodyContainer(props) {
    let visib = () => {
        props.store.dispatch(actionCreiterAddPost());
    }
    let onPostChange=(newtext1)=>{
        let newaction=actionCreiterUpdatePost(newtext1)
        props.store.dispatch(newaction);

    }
    return (
        <div>
            <Body actionCreiterUpdate={onPostChange} visib={visib} Arr={props.Arr} newPostText={props.newPostText}/>
        </div>

    );
}

export default BodyContainer;