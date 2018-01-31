import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import Index from './main/main'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div style={{width:'100%',height:'100%'}}>
            <Route exact path="/" component={App}/>
            <Route path="/index" component={Index}>
            </Route>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
