import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Catsapp from './containers/Catsapp';
import 'tachyons';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <div>
        <div className='fl w-50 pa2'>
            <App/>
        </div>
        <div className='fl w-50 pa2'>
            <Catsapp/>
        </div>
        
    </div>  
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
