import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {pushitem} from '../src/Reduce/State'

export let renderproject=(State)=>{
  ReactDOM.render(
    <>
    <BrowserRouter>
        <App Peoples={State.Statebody.Peoples}
          Arraymessage={State.Statebody.Arraymessage}
          Arr={State.Statebody.Array} Addpost={pushitem} />
      </BrowserRouter>
    </>,
    document.getElementById('root')
  );
}



