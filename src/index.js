import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Reduce/State'

let renderproject=(state)=>{
  ReactDOM.render(
    <>
    <BrowserRouter>
        <App Peoples={state.Statebody.Peoples}
          Arraymessage={state.Statebody.Arraymessage}
          Arr={state.Statebody.Array} Addpost={store.pushitem.bind(store)} 
          Newtext={state.Statebody.NewPostText}
          updatepost={store.Updatepost.bind(store)}/>
      </BrowserRouter>
    </>,
    document.getElementById('root')
  );
}
renderproject(store.getstate())
store.Subscribe(renderproject)


