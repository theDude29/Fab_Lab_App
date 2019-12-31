import { createStore } from 'redux';
import compteReducer from './Reducers/compteReducer'
import { persistReducer } from 'redux-persist'
import storage from '@react-native-community/async-storage'

const rootPersistConfig = {
  key: 'root',
  storage: storage
}

export default createStore(persistReducer(rootPersistConfig, compteReducer))
