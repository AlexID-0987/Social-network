import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Reduce/Store'
import {Provider} from "react-redux";


let renderproject=(state)=>{
  ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App Peoples={state.Statebody.Peoples}
          Arraymessage={state.Statebody.Arraymessage} 
          Arr={state.Statebody.Array} dispatch={store.dispatch.bind(store)}
          Newtext={state.Statebody.NewPostText} 
          NewMessText={state.Statebody.NewMessageText}
          store={store}/>
          
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
}
renderproject(store.getState())
store.subscribe(()=>{
  let state=store.getState()
  renderproject(state)
})


