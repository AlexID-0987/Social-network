const ADD_POST= 'ADD-POST',UPDATE_POST='UPDATE-POST';
const UPDATE_NEW_MESSAGE_TEXT='UPDATE-TEXT',SEND_MESS='SEND-MESS';

let initialstate={
    Peoples: [
        { id: 2, name: 'Alex' },
        { id: 5, name: 'Oleg' },
        { id: 45, name: 'Helga' }
    ],
    Arraymessage: [
        { id: 1, mess: 'Hello I a`m UKRAINE' },
        { id: 2, mess: 'Hello' },
        { id: 3, mess: 'I love live' }
    ],
    Array: [
        {id:1, item: 'Hello' },
        {id:2, item: 'I Love' },
        {id:3, item: 'Good morning' }
    ],
    NewPostText:'Hello',
    NewMessageText:''
}
const bodyReducer =(state =initialstate,action)=>{
    switch (action.type) {
        case ADD_POST: {
            let addit = {id:Date.now(),item: state.NewPostText}
            let stateCopy = {...state,NewPostText: '',Array:[...state.Array,addit]}
            return stateCopy
        }
        case UPDATE_POST: {
            let stateCopy={...state}
            stateCopy.NewPostText = action.newpost;
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy={...state,NewMessageText:action.newtextmess}
            return stateCopy
        }
        case SEND_MESS: {
            let item = state.NewMessageText
            let stateCopy={...state, NewMessageText : '',Arraymessage:[...state.Arraymessage, {id: Date.now(), mess: item}]}
            return stateCopy
        }
        default:
            return state
    }
    
}
export const actionCreiterAddPost=()=>({type:ADD_POST})   
export const actionCreiterUpdatePost=(newtext)=>({type:UPDATE_POST,newpost:newtext})
    
export const sendMessage=()=>({type:SEND_MESS})
export const updateNewMess=(body)=>({type:UPDATE_NEW_MESSAGE_TEXT,newtextmess:body}) 
export default bodyReducer