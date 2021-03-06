import React from 'react';
import ReactDOM from 'react-dom';
import data from './data/data';
import 'normalize-css';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <div>
      <App data={data} />
    </div>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
