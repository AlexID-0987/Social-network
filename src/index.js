import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import State from '../src/Reduce/State'
ReactDOM.render(
  <>
  <BrowserRouter>
      <App Peoples={State.Statebody.Peoples}
        Arraymessage={State.Statebody.Arraymessage}
        Arr={State.Statebody.Array} />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

