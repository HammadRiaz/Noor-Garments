import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { useState,useContext } from 'react';
import { AuthContext } from '../utitlities/auth-context';
const Cart =()=> {
  const auth = useContext(AuthContext);  
  console.log(auth.Cart)
  return(
        null
    );

}
 
function mapStateToProps(state) {
    return({
      products: state.CartItem
    });  
}

export default connect(mapStateToProps)(Cart);