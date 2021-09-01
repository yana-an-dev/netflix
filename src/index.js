import React from 'react'
import App from './app'
import { render } from 'react-dom'
import { GlobalStyle } from './global-styles'
import { firebase } from './lib/firebase.prod'
import { FirebaseContext } from './context/firebase'



render(
    <>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyle />
            <App />
        </FirebaseContext.Provider>

    </>
    , document.getElementById('root'));
