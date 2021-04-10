import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StateProvider } from 'react-redux';
import { App } from './App';
import store from './state/store';

ReactDOM.render(
    <React.StrictMode>
        <StateProvider store={store}>
            <App />
        </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
