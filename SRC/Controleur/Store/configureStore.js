import { createStore } from 'redux';
import compteReducer from './Reducers/compteReducer'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
  key: 'root',
  storage: storage
}

export default createStore(compteReducer)
