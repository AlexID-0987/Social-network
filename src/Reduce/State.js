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
    getstate(){
        return this._state;
    },
    renderproject() {
        console.log('State setstate')
    },
    Subscribe(observer){
        this.renderproject=observer
    },
    pushitem(){
        let addit = { item:this._state.Statebody.NewPostText }
        this._state.Statebody.Array.push(addit)
        this._state.Statebody.NewPostText=''
        this.renderproject(this._state)
    },
    Updatepost(newpost){
        this._state.Statebody.NewPostText=newpost;
        this.renderproject(this._state)
    }
    
}
        
    
     
    
    





export default store
window.store=store;