import React from 'react';
import Navigation from './SRC/Vue/Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './SRC/Controleur/Store/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                    <Navigation/>
            </Provider>
        )
    }
}
