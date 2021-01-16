import React, { useReducer, useEffect } from 'react';
import TextField from 'material-ui/TextField';
import { validate } from './validators';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      }
    }
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || false
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH'
    });
  };

  const element =
      <TextField
      className="text-field-custom"
        id={props.id}
        type={props.type}
        floatingLabelText={props.label}
        hintText={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
  return (
    
    <div
      className={`.text-field-custom ${!inputState.isValid && inputState.isTouched &&
        'text-field-custom--invalid'}`}
    >
      <MuiThemeProvider >
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
      </MuiThemeProvider>
    </div>
  );
};

export default Input;
