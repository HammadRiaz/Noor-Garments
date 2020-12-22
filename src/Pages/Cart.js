import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class Cart extends Component {
    state = {  }

    render() {
        console.log(this.props.products); 
        return ( null );
    }
}
 
function mapStateToProps(state) {
    return({
      products: state.CartItem
    });  
}

export default connect(mapStateToProps)(Cart);