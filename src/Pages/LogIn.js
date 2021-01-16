import React, { useState, useContext } from 'react';
import ErrorModal from '../utitlities/ErrorModal';
import LoadingSpinner from '../utitlities/LoadingSpinner';
import Input from '../utitlities/Input';
import Button from '../utitlities/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../utitlities/validators';
import { useForm } from '../utitlities/form-hook';
import { AuthContext } from '../utitlities/auth-context';
import './Auth.css';
const LogIn = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading]= useState(false);
  let [error, setError] = useState();


  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          },
          Phone: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = async event => {
    event.preventDefault();
    setIsLoading(true);

    if(isLoginMode){
      try{
        
        const response= await fetch('http://localhost:5000/api/users/login',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            Email: formState.inputs.email.value,
            Password: formState.inputs.password.value
          })
        });

        const responseData= await response.json();
        if(!response.ok){
           throw new Error(responseData.message);
        }
        setIsLoading(false);
        auth.login(responseData.user.id, responseData.user.Name);
      }catch(err){
        setIsLoading(false);
        console.log("asddasda"+ error);
        setError(err.message || 'Something went wrong, please try again.');
        error = err.message;
        console.log("dasd"+ error);
        console.log(err.message);      
      }

    }
    else{
      try{
        
        const response= await fetch('http://localhost:5000/api/users/signup',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            Name: formState.inputs.name.value,
            CellPhone: formState.inputs.Phone.value,
            Email: formState.inputs.email.value,
            Password: formState.inputs.password.value
          })
        });

        const responseData= await response.json();
        if(!response.ok){
           throw new Error(responseData.message);
        }
        setIsLoading(false);
        auth.login(responseData.user.id, responseData.user.Name);
      }catch(err){
        
        setIsLoading(false);
        setError(err.message || 'Something went wrong, please try again.');
        console.log(error);
      }

       //axios can be used as well
    }
    
    
  };
  const errorHandler=()=>{
    setError(null);
  }

  return (
    <React.Fragment>
    <ErrorModal error={error} onClear={errorHandler} />
    <div className="authentication">
    {isLoading && <LoadingSpinner asOverlay/>}
    {!isLoginMode &&<h2>Sign Up</h2>}
    {isLoginMode &&<h2>Log In</h2>}
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
          />
        )}
        {!isLoginMode && (
          <Input
            element="input"
            id="Phone"
            type="text"
            label="Your Cell number"
            validators={[VALIDATOR_MINLENGTH(11)]}
            errorText="Please enter a Valid Cell Number."
            onInput={inputHandler}
          />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a valid password, at least 6 characters."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
       {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </Button>
    </div>
    </React.Fragment>
  );
};

export default LogIn;
