import React, {useEffect , useState} from 'react';
import {Link} from 'react-router-dom';
import {SelectedProduct} from '../Actions/productselected';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Animated} from "react-animated-css";
import { useHttpClient} from '../utitlities/http-hook';
import { useParams } from 'react-router-dom';
import ErrorModal from '../utitlities/ErrorModal';
import LoadingSpinner from '../utitlities/LoadingSpinner';
import CartShow from '../components/CartShow';


const Product = (props)=>{
    const [isLoading, setIsLoading]= useState(false);
    const [ Quantity, setQuantity] = useState(props.Quantity);
    const [ name, setName] = useState(props.Name);
    const [ Color, setColor] = useState(props.Color);
    const [ ClothType, setClothType] = useState(props.ClothType);
    const [ CompanyLogo, setCompanyLogo] = useState(props.CompanyLogo);
    const [Input, setInput]= useState(false);
    const [cartItemId, setCartItemID]= useState(props.cartID);
    const {  error, sendRequest, clearError}= useHttpClient();
    const [deleted, setisDeleted]= useState(false);
    const [priceIncrease, setIncrease] = useState(false);

        return (
            <div  className='product Shop m-5' > 
            {isLoading && <LoadingSpinner asOverlay/>}
            {!Input && !deleted &&<div className='PHover'>
                <h4> {name}</h4>
                <h5>Quantity:{Quantity}</h5>
                <h5>Color:{Color}</h5>
                <h5>Cloth Type:{ClothType}</h5>
                {CompanyLogo && <h5>Company Logo:Yes</h5> }               
            </div>}
                <div className='d-inline-flex flex-row'>
                <div className='d-inline-flex flex-column '>
                <Animated animationIn="bounceInRight" animationOut="bounceInLeft" isVisible={true}>
                        {!deleted &&<button className='btn text-primary mt-4' onClick={async event=>{
                            try {
                              setIsLoading(true);
                              await sendRequest(
                                `http://localhost:5000/api/cart/${cartItemId}`,
                                'DELETE'
                              );
                              setIsLoading(false);
                            //   history.push('/' + auth.userId + '/cart');
                            } catch (err) {setIsLoading(false);} setisDeleted(true)}}>Delete</button>
                          }</Animated>
                
                {!Input  && !deleted &&<Animated animationIn="bounceInRight" animationOut="bounceInLeft" isVisible={true}>
                        <button className='btn text-primary mt-4' onClick={()=>{
                            setInput(true);}}>Update</button>
                </Animated>}
                {Input &&<Animated animationIn="bounceInRight" animationOut="bounceInLeft" isVisible={true}>
                  <h6> *NOTE: Must Fill all Input Fields ! Thanks*</h6></Animated>}
                {Input &&<Animated animationIn="bounceInRight" animationOut="bounceInLeft" isVisible={true}>
                        Company Logo:<input className='btn btn-outline-dark m-2' disabled={!priceIncrease} type='checkbox' id='UCL'></input>
                </Animated>}
                {Input &&<Animated animationIn="bounceInRight" animationOut="bounceInLeft" isVisible={true}>
                        ClothType:<input className='btn m-1'  type='text' id='UCT'></input>
                </Animated>}
                {Input &&<Animated animationIn="bounceInRight" animationOut="bounceInLeft" isVisible={true}>
                        Color:<input className='btn m-2 border-aqua '  type='text' id='UC'></input>
                </Animated>}
                {Input &&<Animated animationIn="bounceInRight" animationOut="bounceInLeft" isVisible={true}>
                        Quanity:<input className='btn m-2'  type='number' min="1" id='UQ' name='quantity' onChange={()=>{
                        if(document.getElementById('UQ').value >= 50){
                        setIncrease(true)}
                        if(document.getElementById('UQ').value < 50){
                        setIncrease(false)}
                    }}></input>
                </Animated>}
                {Input &&<Animated animationIn="bounceInRight" animationOut="bounceInLeft" isVisible={true}>
                        
                        <button className='btn text-primary mt-4' onClick={async event=>{
                            event.preventDefault();
                            try {
                              setIsLoading(true);
                              await sendRequest(
                                `http://localhost:5000/api/cart/${cartItemId}`,
                                'PATCH',
                                JSON.stringify({
                                     Quantity: document.getElementById("UQ").value,
                                     clothType: document.getElementById("UCT").value,
                                     companyLogo : document.getElementById("UCL").checked,
                                     Color: document.getElementById("UC").value,         
                                }),
                                {
                                  'Content-Type': 'application/json'
                                }
                              );
                              setIsLoading(false);
                            //   history.push('/' + auth.userId + '/cart');
                            } catch (err) {
                              setIsLoading(false);
                            }
                            setQuantity(document.getElementById("UQ").value);
                            setClothType(document.getElementById("UCT").value);
                            setCompanyLogo(document.getElementById("UCL").checked);
                            setColor(document.getElementById("UC").value);
                            setInput(false);
                          }
                        }>Update Cart</button>
                </Animated>}
                </div>
                
                </div>
            
            </div>

         );
    }

 

function mapStateToProps(state) {
    return({
      products: state.products
    });  
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({SelectedProduct: SelectedProduct}, dispatch)
    
}  
export default connect(mapStateToProps, mapDispatchToProps)(Product);