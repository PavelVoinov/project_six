import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice ({
    name: 'basket',
    initialState: {
        basket: [],
        countItems: 0,
        countPrice: 0
    },
    reducers: {
        addProductInBasket(state, action) {
            state.basket.push(action.payload)
            state.countItems = state.basket.length
            state.countPrice = state.basket.reduce((sum, current) =>{
                return sum + current.price
            }, 0)
        },
        removeProductBasket (state, action) {
            state.basket = state.basket.filter ((item) => {
                return item.idx !== action.payload
            })
            
            state.countItems = state.basket.length
            state.countPrice = state.basket.reduce((sum, current) =>{
                return sum + current.price
            }, 0)

            
            }
        
    }
})

export const { addProductInBasket, removeProductBasket } = basketSlice.actions

export default basketSlice.reducer