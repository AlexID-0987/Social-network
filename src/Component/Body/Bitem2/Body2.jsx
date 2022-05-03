import React from 'react';
import bc2 from '../Bitem2/body2.module.css'
import UsersContainer from "./UsersContainer";
const Body2 = () => {
    return ( 
        <div className={bc2.item}>
            <img src='https://www.wing.com.ua/images/stories/news/1020/bay_061020.jpg'/>
            <UsersContainer/>
        </div>
     );
}
 
export default Body2;