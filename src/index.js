import React from 'react'
import App from './app'
import { render } from 'react-dom'
import { GlobalStyle } from './global-styles'
import { firebase } from './lib/firebase.prod'



render(
    <>
        <GlobalStyle />
        <App />
    </>
    , document.getElementById('root'));
