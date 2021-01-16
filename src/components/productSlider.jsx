import React, { Component } from 'react';
import PSlide from './ProductSlide';
import {Carousel} from 'react-bootstrap';

class Slider extends Component {
  state={
    productS1:[this.props.products[0],this.props.products[1],this.props.products[2],this.props.products[3]],
    productS2:[this.props.products[4],this.props.products[5],this.props.products[6],this.props.products[7]],
    productS3:[this.props.products[8],this.props.products[9],this.props.products[10],this.props.products[11]]
  }
    render() { 
        return (
        <div className='Slider'> 
            <Carousel>
          <Carousel.Item>
            <div className='ProductSlide'>
                <PSlide products={this.state.productS1}/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='ProductSlide'>
                <PSlide products={this.state.productS2}/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='ProductSlide'>
                <PSlide products={this.state.productS3}/>
            </div>
          </Carousel.Item>
        </Carousel>
        </div> );
    }
}
 
export default Slider;
