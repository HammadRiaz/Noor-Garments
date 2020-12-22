import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CopyRights from '../components/Copyrights';
import {Link} from 'react-router-dom';
import {AddInCart} from '../Actions/AddInCart';


class ProductPage extends Component {
    state = { 
        
     }
    render() { 
        if(!this.props.product)
        return(<h3 className='pt-5 pl-5'>[ERROR :404] No Product Selected from Shop ...<br></br>(Go back)</h3>)

        return (
            <div>
                <div className='p-5'>

                    <h5 className='productDescrip'><Link className='text-decoration-none' to='/shop'>Shop</Link>  /{this.props.product.Name}<br></br></h5>
                      
                    <hr></hr>
                    <div className='productcenter'>
                        <img className='' src={this.props.product.Image} alt='' width='100%' height='80%'></img>
                    </div>
                    <br></br>
                    <div className='d-inline-flex flex-row w-100'>
                    <div className='productDescrip'>
                        <h4>{this.props.product.Name}</h4>
                        <h6>Product ID: {this.props.product._id}</h6>
                        <hr></hr>
                        <br></br>
                        <br></br>
                        <h3>Product Info.</h3>
                        <p>{this.props.product.description}</p>
                    </div>
                    <div className='productColor'>
                        <h4>Rs:{this.props.product.Price}</h4>
                        <br></br>
                    <label className='' for='colors'>Colors</label>
                    <br></br>
                        {this.props.product.Color.map(c=>(
                            <div key={this.props.product._id}>
                            <input type='radio' id={c} name='colors' value={c}/> {c}
                            </div>
                        ))}
                        <br></br>
                        <input type='checkbox'/> Company Logo
                        <br></br>
                        <br></br>
                        
                    <label for='quantity'>Quantity</label>
                    <br></br> 
                    <input type='number' min="0" id='Quantity' name='quantity' />
                    <br></br>
                    <br></br>
                    <button className='btn-sm btn-primary' onClick={()=> this.props.AddInCart(this.props.product)}  type='submit'>ADD to CART</button>
                    </div>
                    </div>
                </div>
                <hr></hr>    
                <CopyRights/>
            </div>
          );
    }
}
 
function mapStateToProps(state) {
    return({
      product: state.selectedProduct
    });  
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({AddInCart: AddInCart}, dispatch)
    
}  
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
