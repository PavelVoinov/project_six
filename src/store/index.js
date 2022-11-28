import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './reducers/basket.js'

export default configureStore({
    reducer: {
        basket: basketReducer
    }
})