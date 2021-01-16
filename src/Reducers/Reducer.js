import {combineReducers} from 'redux';
import ProductReducer from './reducer-product';
import selectedProductReducer from './reducer-product-selected';
import SideBarReducer from './reducer-sidebar';

const allReducer= combineReducers({
    products:ProductReducer,
    selectedProduct :selectedProductReducer,
    sideBarData:SideBarReducer
})

export default allReducer;