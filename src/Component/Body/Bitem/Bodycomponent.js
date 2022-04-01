import React from 'react'
import i from '../Bitem/bodycomp.module.css'



function Bodycomponent(props) {
    return (  
        <div>
        <div className={i.item}>
            <img src="https://cdn.pixabay.com/photo/2019/11/07/08/12/sea-4608198_1280.jpg"/>
            {props.mess}
        </div>
        </div>
    );
}

export default Bodycomponent;