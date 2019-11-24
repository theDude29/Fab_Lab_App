import React from 'react';
import Navigation from './SRC/Vue/Navigation/Navigation'
import { Provider } from 'react-redux'
//import Store from './SRC/Controleur/Store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'

import { createStore } from 'redux';
import compteReducer from './SRC/Controleur/Store/Reducers/compteReducer'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


export default class App extends React.Component {
    render() {

        const persistConfig = {
          key: 'root',
          storage,
        }

        const persistedCompteReducer = persistReducer(persistConfig, compteReducer)

          var store = createStore(persistedCompteReducer)
          var persistor = persistStore(store)

        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Navigation />
                </PersistGate>
            </Provider>
        )
    }
}
