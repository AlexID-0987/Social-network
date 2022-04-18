import bodyReducer from "./Body-reduser";
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
    },
    _renderproject() {
        console.log('State setstate')
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this.renderproject=observer
    },
    
    
    dispatch(action) {
        this._state=bodyReducer(this._state,action)
        this.renderproject(this._state)
    }
    
}
export default store
window.store=store;