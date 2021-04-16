import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App/App';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
//ReactDOM.render(<App />, document.getElementById('app'));
// Znajdź element, którego id to 'app', i wstaw do niego komponent App
