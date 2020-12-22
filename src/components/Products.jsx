import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Slider from '../components/productSlider';

class Products extends Component {
    render() { 
        return ( <Slider products={this.props.products}/> );
    }
}
 

function mapStateToProps(state) {
    
    return({
      products: state.products
    });  
  }
  
  export default connect(mapStateToProps)(Products);