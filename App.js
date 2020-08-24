import React from 'react';
import MainStackNavigator from './src/navigation/AppNavigator'
import {Provider} from 'react-redux'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { StatusBar} from 'react-native'
import userReducer from './src/redux/reducers/userReducer'
import dogReducer from './src/redux/reducers/dogReducer'


const rootReducer = combineReducers({
  allUserInfo: userReducer,
  allDogInfo: dogReducer
})

const storeObj = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return(
    <> 
    < StatusBar barStyle = 'light-content' / >
    <Provider store={storeObj}>
        <MainStackNavigator />
    </Provider>
    </>
  )
}