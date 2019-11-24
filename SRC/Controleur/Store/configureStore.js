import { createStore } from 'redux';
import compteReducer from './Reducers/compteReducer'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedCompteReducer = persistReducer(persistConfig, compteReducer)

export default () => {
  let store = createStore(persistedCompteReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
