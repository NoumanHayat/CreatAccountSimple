import React, { useReducer } from 'react';
import axios from 'axios';

 const Context = React.createContext();
  const signin= async (props)=>{

    console.log(props)
   
        try {
          console.log('working')
            const response = await axios.post('http://192.168.137.16:3000/api/v1/users/login',{
            //   email :email,
            // password : password
            email :props.email,
    password : props.password,
           });
            
            console.log(response.data);
          } catch (error) {
            console.log(error);
          }
   
}
 export const Provider = ({ children }) => {
    const authReducer = (state, action) => {
      switch (action.type) {
        default:
          return state;
      }
    };
    const [state, dispatch] = useReducer(authReducer, [{isSignedIn: false}]);

   

    return (
      <Context.Provider value={{ state,signin}}>
        {children}
      </Context.Provider>
    );
  };
  export default  Context;

