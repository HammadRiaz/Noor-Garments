import React, { Component } from 'react';
import Menu from './menuBar';
import logo from "./Images/Logo.png"
import {Link} from 'react-router-dom';

class NavBar extends Component {
   // state = {  }
   //state is commented as we are later going to add a attribute whose state will update.
   
   render() { 
        return ( 
            <div className='NavBar shadow bg-white rounded w-100'>
                
                <div className='Title'>
                    <Link to='/' className='d-sm-inline-flex'>
                        <img className='' src={logo} alt="" ></img> 
                        <h2 className='mt-3 text-primary' >NOOR GARMENTS</h2>
                    </Link>
                </div>
                <div className='d-sm-inline-flex flex-row flex-nowrap justify-content-end w-75 mr-5'> 
                    <Menu />       
                    <h2 className='text-primary ml-3 mt-3'>LOGIN</h2>  
                </div>    
            </div>    
        );
    }
}
 
export default NavBar;