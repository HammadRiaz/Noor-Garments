import React, { Component } from 'react';
import Product from './ProductForCart';

class PSlide extends Component {
    // state = {  }
    render() { 
        if(this.props.products.length === 0){
            return (
              <div>
                <h1>NOTHING IS IN THE CART Go to THE SHOp to add some!!!</h1>
              </div>
            );
        }
        else{
        return (
                this.props.products.map(product=>(<Product
                    Name={product.Name}
                    Quantity={product.Quantity}
                    ClothType={product.clothType}
                    Color={product.Color}
                    CompanyLogo={product.companyLogo}
                    cartID={product._id}
                    />
                   ))
       );}
    }
}
 
export default PSlide;