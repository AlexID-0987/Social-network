import React from 'react';
import Bodycomponent from './Bodycomponent';
import "../Bitem/body.css"
function Body(props) {
    
    /* let Array = [
        { item: 'Hello' },
        { item: 'I Love' },
        { item: 'Good morning' }
    ] */
    let Aritem = props.Arr.map(i => <Bodycomponent mess={i.item} />)
    let newPost=React.createRef();
    let visibPost = () => {
        props.visib()
    }
    let onPostChange=()=>{
        let newtext1 = newPost.current.value;
        props.actionCreiterUpdate(newtext1)
    }
    return (
        <div>
            <h1>Body</h1>
            <div className='pole'>
                <div>
                    <textarea ref={newPost} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={visibPost}>Add</button>
                </div>
            </div>
            {Aritem}
        </div>
        
    );
}

export default Body;