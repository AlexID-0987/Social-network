const ADD_POST= 'ADD-POST',UPDATE_POST='UPDATE-POST';
const UPDATE_NEW_MESSAGE_TEXT='UPDATE-TEXT',SEND_MESS='SEND-MESS';

let initialstate={Peoples: [
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
        { item: 'Hello' },
        { item: 'I Love' },
        { item: 'Good morning' }
    ],
    NewPostText:'Hello',
    NewMessageText:''
}
const bodyReducer =(state =initialstate,action)=>{
    switch (action.type) {
        case ADD_POST:
            let addit = { item: state.Statebody.NewPostText }
            state.Statebody.Array.push(addit)
            state.Statebody.NewPostText = ''
            return state
        case UPDATE_POST:
            state.Statebody.NewPostText = action.newpost;
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.Statebody.NewMessageText = action.newtextmess;
            return state
        case SEND_MESS:
            let item = state.Statebody.NewMessageText
            state.Statebody.NewMessageText = ''
            state.Statebody.Arraymessage.push({ id: 4, mess: item })
            return state
        default:
            return state
    }
    
}
export const actionCreiterAddPost=()=>({type:ADD_POST})   
export const actionCreiterUpdatePost=(newtext)=>({type:UPDATE_POST,newpost:newtext})
    
export const sendMessage=()=>({type:SEND_MESS})
export const updateNewMess=(body)=>({type:UPDATE_NEW_MESSAGE_TEXT,newtextmess:body}) 
export default bodyReducer