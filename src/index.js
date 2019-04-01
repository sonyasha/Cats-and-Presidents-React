import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './containers/App';
import Catsapp from './containers/CatsApp';
import Presapp from './containers/PresApp';
import 'tachyons';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <div>
        <div className='fl w-50-l pa2 w-100-m'>
            {/* <App/> */}
            <Presapp/>
        </div>
        <div className='fl w-50-l pa2 w-100-m'>
            <Catsapp/>
        </div>
        
    </div>  
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
