import React, {useReducer,useContext, useEffect} from 'react';
import axios from 'axios';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

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
    await AsyncStorage.setItem("Token",response.data.token)
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
    await AsyncStorage.setItem('Token',response.data)
    alert("You are now logged in")
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
var defaultStatus=false;
const automaticallySignIn=(dispatch)=>{
  return async () => {
    const token=await AsyncStorage.getItem('Token');
    if(token) {
      defaultStatus=true;
    }

  }
}
export const Provider = ({children}) => {
  const authReducer = (state, action) => {
    switch (action.type) {
      case 'chageSignedIn':
        return {...state, isSignedIn: true}

      default:
        
        return state;
    }
  };


  const [state, dispatch] = useReducer(authReducer, [{isSignedIn: defaultStatus}]);
  useEffect(()=>{
    automaticallySignIn(dispatch)
  },[]);
  return (
    <Context.Provider value={{state, signin,signup}}>{children}</Context.Provider>
  );
};
export default Context;
