import React, { Component } from 'react';
import about from './Images/About.png';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';


class AboutTab extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='d-inline-flex'>
            <div className='align-items-center aboutMargin'>
                <h2 className='text-primary'>ABOUT NOOR GARMENTS</h2>
                <p>Noor Garments was founded in 2005 by Riaz Ahmad and Samina Riaz, 
                With the passage of time the manufacturing scale increased from house-scale to factory-scale.
                Noor Garments mainly deals with garments that are used in industries such as bakery, Ice-Cream industry etc.
                Workers garments are available at affordable price. 
                </p>
                <Link to='/about'>
                <Button className='rounded' variant="primary">Explore</Button>
                </Link>
            </div>
            <div>
                <img src={about} alt='' width='100%' height='100%'/>
            </div>
            </div>
         );
    }
}
 
export default AboutTab;