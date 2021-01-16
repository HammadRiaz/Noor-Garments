import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Menu extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='menuItems text-primary'>
                
                    <Link to='/' className='ml-0 mt-1 text-decoration-none '>
                    Home  
                    </Link>
                    <Link to='/shop' className='ml-3 mt-1 text-decoration-none'>
                    Shop  
                    </Link>
                    <Link to='/about' className='ml-3 mt-1 text-decoration-none'>
                    About
                    </Link>
                    <Link to='/shop/productPage/Cart' className='ml-3 mr-3 mt-1 text-decoration-none'>
                    Cart
                    </Link>
                <Dropdown>
                <Dropdown.Toggle as='h4' className='text-primary mt-1 w-25 ' id="dropdown-basic">
                    More
                </Dropdown.Toggle>
                <Dropdown.Menu>
                
                    <Link  to='/about' className='text-decoration-none'>
                    <Dropdown.Item href="#/action-1" className='text-primary'>Contact</Dropdown.Item>
                    </Link>

                    <Link to='/about' className='text-decoration-none'>
                    <Dropdown.Item  href="#/action-2" className='text-primary'>New Collection</Dropdown.Item>
                    </Link>

                    <Link to='/about' className='text-decoration-none'>
                    <Dropdown.Item href="#/action-3" className='text-primary'>Store Collection</Dropdown.Item>
                    </Link>
                </Dropdown.Menu>
                </Dropdown>
            </div>
         );
    }
}
 
export default Menu;