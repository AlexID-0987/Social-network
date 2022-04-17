import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Reduce/Redux-store'
import {Provider} from "react-redux";

let renderproject=(state)=>{
  ReactDOM.render(
    <>
    <Provider store={store}>
        <App Peoples={state.Statebody.Peoples}
          Arraymessage={state.Statebody.Arraymessage} 
          Arr={state.Statebody.Array} dispatch={store.dispatch.bind(store)}
          Newtext={state.Statebody.NewPostText} 
          NewMessText={state.Statebody.NewMessageText}
          store={store}/>
          
      </Provider>
    </>,
    document.getElementById('root')
  );
}
renderproject(store.getstate())
store.Subscribe(()=>{
  let state=store.getState()
  renderproject(state)
})


