import { configureStore } from '@reduxjs/toolkit'
import cashReducer from './cashReducer'
import customerReducer from './customerReducer'
import {combineReducers} from 'redux'


import type { CashState } from './cashReducer'
import type { CustomerState } from './customerReducer'


export type State = {
    cash: CashState
    customer: CustomerState
}

const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer
})
  
export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})