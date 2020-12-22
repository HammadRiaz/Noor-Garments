import React, { Component } from 'react';
import PSlide from '../components/ProductSlide';
import CopyRights from '../components/Copyrights';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class Shop extends Component {
    state = {  
       
     }
     
    render() { 
        return ( 
            <div>
            <h1 className='text-center text-primary mt-4'>Shop</h1>
            <hr></hr>
            <h3 className='text-center mt-4'> Products available are below</h3>
            <div className='ProductSlide flex-wrap m-5'>
                <PSlide products={this.props.products}/>
            </div>
            <hr></hr>    
            <CopyRights/>
            </div> 
          );
    }
}
 
function mapStateToProps(state) {
    return({
      products: state.products
    });  
  }
  
  export default connect(mapStateToProps)(Shop);