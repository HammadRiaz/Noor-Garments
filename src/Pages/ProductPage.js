import React, {  useContext, useState } from 'react';
import {bindActionCreators} from 'redux';
import {AuthContext} from '../utitlities/auth-context';
import {connect} from 'react-redux';
import CopyRights from '../components/Copyrights';
import {Link} from 'react-router-dom';
import {AddInCart} from '../Actions/AddInCart';
import {useHttpClient} from '../utitlities/http-hook';
import ErrorModal from '../utitlities/ErrorModal';
import LoadingSpinner from '../utitlities/LoadingSpinner';
import Input from '../utitlities/Input';
import Button from '../utitlities/Button';

const ProductPage =(props)=> {

        const auth = useContext(AuthContext)
        const {isLoading, error, sendRequest, clearError} = useHttpClient();
        const [priceIncrease, setIncrease] = useState(false);
        const [color, setColor] = useState();
        const [clothType, setClothType] = useState();
        const [cL, setCL] = useState(false);

        const AddedToCart = async event =>{
            event.preventDefault();
           
            if(color=== undefined || clothType=== undefined){

            }
            
            console.log(props.product._id);
            console.log(auth.userId);
            console.log(props.product.Name);
            console.log(color.c);
            console.log(clothType.c);
            console.log(cL);
            console.log(document.getElementById('Quantity').value);

            try{
                await sendRequest('http://localhost:5000/api/cart/addProduct', 'POST', 
            JSON.stringify(
               {
                    ProductID: props.product._id,
                    Creator: auth.userId,
                    Name: props.product.Name,
                    Color: color.c,
                    clothType: clothType.c,
                    companyLogo:cL,
                    Quantity:document.getElementById('Quantity').value
                }
            ),
            {'Content-Type': 'application/json'} 
        );
        }catch(err){

        }
        }

        

        if(!props.product)
        return(<h3 className='pt-5 pl-5'>[ERROR :404] No Product Selected from Shop ...<br></br>(Go back)</h3>);

        
        return (
            
            <div>
                <ErrorModal error={error} onClear={ clearError}/>
                <form className='p-5' onSubmit={AddedToCart}>
                    {isLoading && <LoadingSpinner asOverlay/>}
                    <h5 className='productDescrip'><Link className='text-decoration-none' to='/shop'>Shop</Link>  /{props.product.Name}<br></br></h5>
                    <hr></hr>
                    <div className='productcenter'>
                        <img className='' src={props.product.Image} alt='' width='100%' height='80%'></img>
                    </div>
                    <br></br>
                    <div className='d-inline-flex flex-row w-100'>
                    <div className='productDescrip'>
                        <h4>{props.product.Name}</h4>
                        <h6>Product ID: {props.product._id}</h6>
                        <hr></hr>
                        <br></br>
                        <br></br>
                        <h3>Product Info.</h3>
                        <p>{props.product.description}<br></br><span className='text-bold'> Company Logo:</span> Your own Company Logo will be printed on the Item :"Only Avaialble for order of over 50 products"</p>
                    </div>
                    <div className='productColor'>
                        <h4>Rs:{props.product.Price}</h4>
                        <br></br>
                    <label className='text-primary'>Colors</label>
                    <br></br>
                        {props.product.Color.map(c=>(
                            <div key={Math.random().toString()}>
                            <input
                                type="radio"
                                name="color"
                                id={c}
                                onClick={()=>{
                                    setColor({c});
                                }}
                                
                                /> {c}
                            </div>
                        ))}

                        <br></br>
                        <label className='text-primary'>Cloth Type</label>
                        <br></br>
                        {props.product.clothType === null && <div>Not particular range of cloths Available</div>}
                        {props.product.clothType === null || props.product.clothType.map(c=>(
                            <div key={Math.random().toString()}>
                            <input
                                type="radio"
                                name="cloth"
                                id={c}
                                onClick={()=>{
                                    setClothType({c});
                                }}
                                /> {c}
                            </div>
                        ))}   
                        <br></br>
                        <input id='Logo' disabled={!priceIncrease} type='checkbox' onClick={()=>{
                            setCL(document.getElementById('Logo').checked);
                        }
                        } className='text-primary'/> <label className='text-primary'>Company Logo</label>
                        
                        <br></br>
                        <br></br>
                        
                    <label>Quantity</label>
                    <br></br> 
                    <input type='number' min="1" id='Quantity' name='quantity' onChange={()=>{
                        if(document.getElementById('Quantity').value >= 50){
                        setIncrease(true)}
                        if(document.getElementById('Quantity').value < 50){
                        setIncrease(false)}
                    }}/>
                    <br></br>
                    <br></br>


                    <Link to='/login'> 
                     {!auth.isLoggedIn && <div>You Need to Login First</div>}
                     </Link>
                    <Link to='/shop'> 
                     <Button className='btn-sm btn-primary' disabled={!auth.isLoggedIn} onClick={AddedToCart} type='submit'>ADD to CART</Button>
                    </Link>
                    </div>

                    </div>
                </form>
                <hr></hr>    
                <CopyRights/>
            </div>
          );

        }
    
 
function mapStateToProps(state) {
    return({
      product: state.selectedProduct
    });  
}
 
export default connect(mapStateToProps)(ProductPage);
