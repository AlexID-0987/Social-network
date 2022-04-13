import React from 'react';
import Bodycomponent from './Bodycomponent';
import "../Bitem/body.css"
import { actionCreiterAddPost,actionCreiterUpdatePost } from '../../../Reduce/Body-reduser';
function Body(props) {
    
    /* let Array = [
        { item: 'Hello' },
        { item: 'I Love' },
        { item: 'Good morning' }
    ] */
    let Aritem = props.Arr.map(i => <Bodycomponent mess={i.item} />)
    let newPost=React.createRef();
    let visib = () => {
        props.dispatch(actionCreiterAddPost());
    }
    let onPostChange=()=>{
        let newtext1 = newPost.current.value;
        let newaction=actionCreiterUpdatePost(newtext1)
        props.dispatch(newaction);
    }
    return (
        <div>
            <h1>Body</h1>
            <div className='pole'>
                <div>
                    <textarea ref={newPost} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={visib}>Add</button>
                </div>
            </div>
            {Aritem}
        </div>
        
    );
}

export default Body;