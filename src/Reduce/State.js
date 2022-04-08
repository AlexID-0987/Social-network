const ADD_POST= 'ADD-POST',UPDATE_POST='UPDATE-POST';
let store={
    _state:{
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
    },
    _renderproject() {
        console.log('State setstate')
    },
    getstate(){
        return this._state;
    },
    Subscribe(observer){
        this.renderproject=observer
    },
    _pushitem(){
        let addit = { item:this._state.Statebody.NewPostText }
        this._state.Statebody.Array.push(addit)
        this._state.Statebody.NewPostText=''
        this.renderproject(this._state)
    },
    _Updatepost(newpost){
        this._state.Statebody.NewPostText=newpost;
        this.renderproject(this._state)
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._pushitem()
        }
        else if (action.type === UPDATE_POST) {
            this._Updatepost(action.newpost)
        }
    }
    
}


export const actionCreiterAddPost=()=>({type:ADD_POST})   
export const actionCreiterUpdatePost=(newtext)=>({type:UPDATE_POST,newpost:newtext})
    





export default store
window.store=store;