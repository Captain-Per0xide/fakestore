import {createSlice} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { RootState } from './index';
interface CartState{
    cart:any,
}
const initialState:CartState={
    cart:[]
}
const CartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state: { cart: any[]; },action: { payload: any; })=>{
            const isPresent=state.cart.find((item:any)=>{ return item.id===action.payload.id})
            if(isPresent){
                //update quantity
                state.cart=state.cart.map((item:any)=>{
                    return item.id===action.payload.id?{...item,quantity:item.quantity+1}:item;
                })
            }
            else{

                state.cart.push({...action.payload, quantity: 1});
            }
        }
    }
})
export const {addToCart}=CartSlice.actions;
export const getCart=(state:RootState)=>state.cart.cart;
export default CartSlice.reducer;