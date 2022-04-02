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
        ]
    }
}
export let pushitem=(newitem)=>{
    let addit={
        item:newitem
    }
  state.Statebody.Array.push(addit)
  renderproject(state)
}

export default state