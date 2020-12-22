import {combineReducers} from 'redux';
import ProductReducer from './reducer-product';
import selectedProductReducer from './reducer-product-selected';
import CartItem from './reducer-cart';

const allReducer= combineReducers({
    products:ProductReducer,
    selectedProduct :selectedProductReducer,
    CartItem:CartItem
})

export default allReducer;