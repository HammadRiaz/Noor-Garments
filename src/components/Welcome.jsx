import React, { Component } from 'react';
import WC from "./Images/WC.jpg"
import S1 from "./Images/Slide.jpg"
import S2 from "./Images/Slide2.png"
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Carousel} from 'react-bootstrap';
import {Animated} from "react-animated-css";


class Welcome extends Component {
  state={
    visible: false
  }
  setVisible=()=>{
    const visible= true;
    this.setState({visible});
  }
  render() {  
    return(
<div>
  <div>      
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={WC}
      alt="First slide"
    />
    <Carousel.Caption className='textcolor'>
      <h3>Quality </h3>
      <p>Quality is more important than quantity</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={S1}
      alt="Third slide"
    />

    <Carousel.Caption className='textcolor z1'>
      <h3 className='text-secondary'>Customer Satisfaction</h3>
      <p className='text-secondary text-dark'>Satisfied customer is the best source of advertisement</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={S2}
      alt="Third slide"
    />

    <Carousel.Caption className='textcolor text-dark'>
      <h3>About</h3>
      <p>Noor Garments is a small industry that deals with industry garments.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<Animated animationIn="bounceInUp" animationOut="bounceInDown" isVisible={this.state.visible}>
<div className='Welcome' onClick={this.setVisible}>
        <h1 className='text-center mt-5 text-primary'>WELCOME</h1>
        <h3 className='text-center mt-3'>Products you will LOVE !</h3>
</div>
</Animated>
</div>
    );
    
  }
}

function mapStateToProps(state) {
  return({
    products: state.products
  });  
}

export default connect(mapStateToProps)(Welcome);