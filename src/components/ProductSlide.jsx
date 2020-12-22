import React, { Component } from 'react';
import Product from './Product';

class PSlide extends Component {
    // state = {  }
    render() { 
        return (
                this.props.products.map(product=>(<Product
                    key={product._id}  
                    Name={product.Name}
                    image={product.Image}
                    Price={product.Price}
                    id={product._id}
                    />
                   ))
       );
    }
}
 
export default PSlide;