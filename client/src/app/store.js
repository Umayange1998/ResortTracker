import { configureStore } from '@reduxjs/toolkit'
import alertReducer from "../reducers/alertSlice"
import isAuthReducer from '../reducers/isAuthSlise'

const store = configureStore({
    reducer:{

        alerts: alertReducer,
        isAuth: isAuthReducer,

    }

    
})

export default store
