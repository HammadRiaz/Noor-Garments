import React, {useEffect , useState} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { useContext } from 'react';
import { AuthContext } from '../utitlities/auth-context';
import { useHttpClient} from '../utitlities/http-hook';
import { useParams } from 'react-router-dom';
import ErrorModal from '../utitlities/ErrorModal';
import LoadingSpinner from '../utitlities/LoadingSpinner';
import CartShow from '../components/CartShow';
import {Animated} from "react-animated-css";
import CopyRights from '../components/Copyrights';

const Cart =()=> {
  const auth = useContext(AuthContext); 
  const [loadedCart, setLoadedCart]= useState();
  const { isLoading, error, sendRequest, clearError}= useHttpClient();
  const userID = auth.userId;

   
  useEffect(()=>{
    const fetchCart = async()=>{

    try{
      const responseData= await sendRequest(`http://localhost:5000/api/cart/user/${userID}`);
      setLoadedCart(responseData.Cart);
    }catch(err){
      
    }
    };
    fetchCart();
  }, [sendRequest, userID]);
  if(loadedCart=== undefined){
    return(
      <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading &&(
        <div className='center'>
      <LoadingSpinner />
      </div>)}
      <Animated animationIn="bounceInUp" animationOut="bounceInDown" isVisible={true}>
         <h1 className='text-center text-primary mt-4'>Cart</h1>
       </Animated>
       <hr></hr>
          
            <h1>NOTHING IS IN THE CART Go to THE SHOP to add some!!!</h1>
      </React.Fragment> 
    );
  }
  else{
  return(
       <React.Fragment>
         <ErrorModal error={error} onClear={clearError} />
         {isLoading &&(
           <div className='center'>
         <LoadingSpinner />
         </div>)}
         <Animated animationIn="bounceInUp" animationOut="bounceInDown" isVisible={true}>
            <h1 className='text-center text-primary mt-4'>Cart</h1>
          </Animated>
          <hr></hr>
         {!isLoading && loadedCart && <CartShow  products={loadedCart}/>}
         {/* <button className='btn text-primary m-4' >Proceed to Payment</button> */}
       </React.Fragment>
    );
  }
}
 
function mapStateToProps(state) {
    return({
      products: state.CartItem
    });  
}

export default connect(mapStateToProps)(Cart);