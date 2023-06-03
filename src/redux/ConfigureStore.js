import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  addContactSlice  from "./ducks/TodoReducer";

export const reducer = combineReducers({
    addContactSlice 
})

export const store = configureStore({
    reducer
})
