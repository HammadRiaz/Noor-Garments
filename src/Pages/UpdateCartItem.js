// import React, { useEffect, useState, useContext } from 'react';
// import { useParams, useHistory } from 'react-router-dom';

// import Input from '../utitlities/Input';
// import Button from '../utitlities/Button';
// import LoadingSpinner from '../utitlities/LoadingSpinner';
// import ErrorModal from '../utitlities/ErrorModal';
// import {
//   VALIDATOR_REQUIRE,
//   VALIDATOR_MINLENGTH
// } from '../utitlities/validators';
// import { useForm } from '../utitlities/form-hook';
// import { useHttpClient } from '../utitlities/http-hook';
// import { AuthContext } from '../utitlities/auth-context';

// const UpdatePlace = () => {
//   const auth = useContext(AuthContext);
//   const { isLoading, error, sendRequest, clearError } = useHttpClient();
//   const [loadedItem, setLoadedItem] = useState();
//   const cartItemId = "600196671f7dec3350982e26";
//   const history = useHistory();
//   console.log(cartItemId);
//   const [formState, inputHandler, setFormData] = useForm(
//     {
//       Quantity: {
//         value: '',
//         isValid: false
//       },
//       ClothType: {
//         value: '',
//         isValid: false
//       },
//       CompanyLogo: {
//         value: '',
//         isValid: false
//       },
//       Color: {
//         value: '',
//         isValid: false
//       }
//     },
//     false
//   );

//   useEffect(() => {
//     const fetchPlace = async () => {
//       try {
//         const responseData = await sendRequest(
//           `http://localhost:5000/api/cart/${cartItemId}`
//         );
//         console.log(responseData);
//         setLoadedItem(responseData);
//         setFormData(
//           {
//             Quantity: {
//                 value: responseData.Quantity,
//                 isValid: false
//               },
//               ClothType: {
//                 value: responseData.ClothType,
//                 isValid: false
//               },
//               CompanyLogo: {
//                 value: responseData.CompanyLogo,
//                 isValid: false
//               },
//               Color: {
//                 value: responseData.Color,
//                 isValid: false
//               }
//           },
//           true
//         );

//       } catch (err) {}
//     };
//     fetchPlace();
//   }, [sendRequest, cartItemId, setFormData]);

//   const UpdateSubmitHandler = async event => {
//     event.preventDefault();
//     try {
//       await sendRequest(
//         `http://localhost:5000/api/cart/${cartItemId}`,
//         'PATCH',
//         JSON.stringify({
//             Quantity: formState.inputs.Quantity.value,
//             clothType: formState.inputs.ClothType.value,
//             companyLogo : formState.inputs.CompanyLogo.value,
//             Color: formState.inputs.Color.value,         
//         }),
//         {
//           'Content-Type': 'application/json'
//         }
//       );
//       history.push('/' + auth.userId + '/cart');
//     } catch (err) {}
//   };

//   if (isLoading) {
//     return (
//       <div className="center">
//         <LoadingSpinner />
//       </div>
//     );
//   }

//   if (!loadedItem && !error) {
//     return (
//       <div className="center">
//           <h2>Could not find the Item!</h2>
//       </div>
//     );
//   }

//   return (
//     <React.Fragment>
//       <ErrorModal error={error} onClear={clearError} />
//       {!isLoading && loadedItem && (
//         <form className="place-form" onSubmit={UpdateSubmitHandler}>
//           <Input
//             id="Quantity"
//             element="input"
//             type="text"
//             label="Quantity"
//             validators={[VALIDATOR_REQUIRE()]}
//             errorText="Please enter Data."
//             onInput={inputHandler}
//             initialValue={loadedItem.Quantity}
//             initialValid={true}
//           />
//           <Input
//             id="Color"
//             element="text"
//             label="Color"
//             validators={[VALIDATOR_REQUIRE()]}
//             errorText="Please enter Data."
//             onInput={inputHandler}
//             initialValue={loadedItem.Color}
//             initialValid={true}
//           />
//           <Input
//             id="CompanyLogo"
//             element="text"
//             label="Company Logo"
//             validators={[VALIDATOR_REQUIRE()]}
//             errorText="Please enter Data."
//             onInput={inputHandler}
//             initialValue={loadedItem.CompanyLogo}
//             initialValid={true}
//           />
//           <Input
//             id="ClothType"
//             element="text"
//             label="Cloth Type"
//             validators={[VALIDATOR_REQUIRE()]}
//             errorText="Please enter Data."
//             onInput={inputHandler}
//             initialValue={loadedItem.ClothType}
//             initialValid={true}
//           />
//           <Button type="submit" disabled={!formState.isValid}>
//             UPDATE PLACE
//           </Button>
//         </form>
//       )}
//     </React.Fragment>
//   );
// };

// export default UpdatePlace;
