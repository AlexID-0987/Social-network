import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Reduce/Redux-store'
import {Provider} from "react-redux";
import storeTest from "./Reduce/Store-test";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App Peoples={storeTest._state.Statebody.Peoples}/>
        </BrowserRouter>,
    </Provider>,

    document.getElementById('root')
);




