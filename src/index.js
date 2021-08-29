import React from 'react';
import { render } from 'react-dom';
//entry point
import { GlobalStyle } from './global-styles';
import App from './app';


render(
    <>
        <GlobalStyle />
        <App />
    </>
    , document.getElementById('root'));
