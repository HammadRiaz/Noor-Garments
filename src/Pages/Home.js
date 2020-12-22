import React, { Component } from 'react';
import CopyRights from '../components/Copyrights';
import Welcome from '../components/Welcome';
import Products from '../components/Products';
import AboutTab from '../components/aboutTab';
import ContactUs from '../components/contactUs';
import Map from '../components/Map';

class Home extends Component {
    state = {  }
    render() { 
        return (  
        <div>
            
            <Welcome/>
      
            <br></br>
            <hr></hr>
            <Products />
            <hr></hr>
            <br></br>
      
            <AboutTab/>
            <br></br>
            <hr></hr>
      
            <br></br>
            <ContactUs/>
            <br></br>
            <hr></hr>
            <Map/>
            <hr></hr>    
            <CopyRights/> 
          </div> );
    }
}
 
export default Home;