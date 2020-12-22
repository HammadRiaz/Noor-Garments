import React, { Component } from 'react';
import AP from "../components/Images/AboutPage.jpg";
import CopyRights from '../components/Copyrights';
class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 className='text-center text-primary mt-5'>About Our Store</h1>
                
                <div className='aboutPage w-100'>
                <p className='w-50 text-center  m-5'>Noor Garments was founded in 2005 by Riaz Ahmad and Samina Riaz, 
                With the passage of time the manufacturing scale increased from house-scale to factory-scale.
                Noor Garments mainly deals with garments that are used in industries such as bakery, Ice-Cream industry etc.
                Workers garments are available at affordable price. Noor Garments has been bringing exceptional style to shoppers far and 
                wide since our founding, and we don’t intend on stopping anytime soon. Our vision is fast-paced, forward-thinking and fashion-centered at its core,
                 and all of our products reflect these ideals. We invite you to browse through our site to find just what you have been looking for.
                </p>
                </div>
                <img src={AP} alt='' width='100%'/>
                <hr></hr>    
                <CopyRights/>
            </div>
         );
    }
}
 
export default About;