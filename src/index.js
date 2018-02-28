import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter,Router} from 'react-router-dom';
import './index.css';
import App from './App';
import Index from './main/main'
import registerServiceWorker from './registerServiceWorker';
import history from './utils/history'
ReactDOM.render(
    <Router history={history}>
        <div style={{width:'100%',height:'100%'}}>
            <Route exact path="/" component={App}/>
            <Route path="/index" component={Index}>
            </Route>
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
