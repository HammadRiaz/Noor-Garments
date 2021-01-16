import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {SelectedProduct} from '../Actions/productselected';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Product extends Component {
    state = { 
        image: this.props.image,
        name: this.props.Name,
        price: this.props.Price,
        id: this.props.id
     }
    
   
    render() { 
        const pr =this.props.products.filter(c => c._id === this.state.id);
        return (
            <div  className='product Shop m-5 ' 
            onClick={()=> this.props.SelectedProduct(pr[0])}>  
            <Link 
            to='/shop/productPage'
            className='text-decoration-none text-dark'
            
            >
                <img src={this.state.image} alt='' width='100%' height='80%'></img>
                <div className='PHover'>
                <h4> {this.state.name}</h4>
                <h5>Rs:{this.state.price}</h5>
                <p>This a Product</p>
                </div>
            </Link>
            </div>

         );
    }
}
 

function mapStateToProps(state) {
    return({
      products: state.products
    });  
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({SelectedProduct: SelectedProduct}, dispatch)
    
}  
export default connect(mapStateToProps, mapDispatchToProps)(Product);