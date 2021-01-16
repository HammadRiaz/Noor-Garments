import React, { Component } from 'react';
import {VscCallIncoming } from "react-icons/vsc";

class ContactUs extends Component {
    state = {  }
    render() { 
        return ( 
            <div>

                <div className='d-inline-flex w-25 flex-wrap'>
                <h1 className='text-primary Contact'>CONTACT US</h1>
                <h6 className=' Contact'>Email:  noorgarments@gmail.com</h6>
                <h6 className=' Contact'>Phone:  042-7771999 <VscCallIncoming/></h6>
                <h6 className=' Contact'>Address:Gajjumata Sua, Ferozepur road Kahna Lahore</h6>
                </div>


                <div className='d-inline-flex w-25 flex-wrap Fields'>
                <input placeholder="Name"
                       className='fieldWidth Border ml-1' >
                        
                </input>
                <input type="email" placeholder="E-mail"
                       className='fieldWidth Border mr-1' >

                </input>
                
                <input placeholder="Subject"       
                        className='w-100 m-2 Border'>      
                </input>

                <textarea  placeholder="Type your message here!"
                            className='w-100  m-2 Border'
                            rows="4" cols="50">
                    
                </textarea>
                <input type="submit"
                        className='btn-primary btn-sm ml-1 rounded'>
                </input>

                
                </div>
                
            </div>

         );
    }
}
 
export default ContactUs;