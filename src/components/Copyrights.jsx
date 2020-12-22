import React, { Component } from 'react';
import FB from './Images/FB.jpg';
import Twitter from './Images/Twitter.png';
import Insta from './Images/Insta.jpg'

class CopyRights extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Footer">
                <div className='d-inline-flex justify-content-center '>
                <img className='social' src={FB} alt=""/>
                <img className='social' src={Twitter} alt=""/>
                <img className='social' src={Insta} alt=""/>
                </div>

                <h6 className='text-center'>@2020 Copyright © Noor Garments</h6>
            </div>
         );
    }
}
 
export default CopyRights;