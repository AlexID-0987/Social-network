import { renderproject } from "../Render"

let state={
    Statebody:{
        Peoples: [
            { id: 2, name: 'Alex' },
            { id: 5, name: 'Oleg' },
            { id: 45, name: 'Helga' }
        ],
        Arraymessage: [
            { id: 1, mess: 'Hello I a`m UKRAINE' },
            { id: 4, mess: 'Hello' },
            { id: 67, mess: 'I love live' }
        ],
        Array: [
            { item: 'Hello' },
            { item: 'I Love' },
            { item: 'Good morning' }
        ],
        NewPostText:'Hello'
    }
}
export let pushitem=()=>{
    let addit = { item: state.Statebody.NewPostText }
    state.Statebody.Array.push(addit)
    state.Statebody.NewPostText=''
    renderproject(state)
}
export let Updatepost=(newpost)=>{
    state.Statebody.NewPostText=newpost;
    renderproject(state)
}
export default state