import React from 'react';
import bi2 from '../Bitem1/bodyitems2.module.css'
const Textmess =(props)=>{
    return(
    <div className={bi2.item2}>{props.messitem}</div>
    )
}
/* let Arraymessage = [
    { id: 1, mess: 'Hello I a`m UKRAINE' },
    { id: 4, mess: 'Hello' },
    { id: 67, mess: 'I love live' }
]  */
function Bodyitem2(props) {
    let Messages=props.Arraymessage.map(item=><Textmess messitem={item.mess}/>)
    let newmess=props.newmess
    let onSendMessage=()=>{
      props.sendMess()
    }
    let onNewmesschange=(event)=>{
     let body= event.target.value
        props.updateNewBody(body)
    }
    return (  
        <div className={bi2.item}>
         {Messages}
         <div>
             <textarea placeholder='Enter you message' onChange={onNewmesschange} value={newmess}/>
             <div>
             <button onClick={onSendMessage}>Add</button>
             </div>
         </div>
        </div>
    );
}

export default Bodyitem2;