import React, {useReducer,useContext} from 'react';
import axios from 'axios';
// import { AsyncStorage } from '@react-native-async-storage/async-storage';

const Context = React.createContext();
const ip="192.168.18.99";
const signin = async props => {
  

  try {
    const response = await axios.post(
      `http://${ip}:3000/api/v1/users/login`,
      {
        
    
   
          // name: "Lisa Brown",
          // email: "test@test.com",
          // role: "user",
          // active: "true",
          // photo:"user-20.jpg",
          // password: "test1234",
          // passwordConfirm: "test1234"
              
      
      
        email: props.email,
        password: props.password,
      },
    );

    console.log(response.data.token);
    // await AsyncStorage.setItem("Token",response.data.token)
    alert("You are now logged in")
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
const signup = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/v1/users/signup`,
      {
        email: props.email,
        password: props.password,
      },
    );

    console.log(response.data);

    alert("You are now logged in")
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
export const Provider = ({children}) => {
  const authReducer = (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(authReducer, [{isSignedIn: false}]);

  return (
    <Context.Provider value={{state, signin,signup}}>{children}</Context.Provider>
  );
};
export default Context;
