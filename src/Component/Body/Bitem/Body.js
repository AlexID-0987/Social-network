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
    let visib = () => {
        let newtext = newPost.current.value;
        props.Add(newtext);
        newPost.current.value=''
    }
    return (

        <div>
            <h1>Body</h1>
            <div className='pole'>
                <div>
                    <textarea ref={newPost}></textarea>
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