import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'materialize-css/dist/css/materialize.min.css';
import './Loader/Loader.css';


ReactDOM.render(<App />,
document.getElementById('root'));
registerServiceWorker();
