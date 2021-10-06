import React,{useReducer} from 'react';
import {View, Text,Button} from 'react-native';
const axios = require('axios');
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

// async function getTour() {
//   try {
//     const response = await axios.post('http://172.30.192.1:3000/api/v1/users/login',{
//       email :"lisa@example.com",
//     password : "test1234"
//    });
    
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// }
const AccountScreen = (props) => {
  const navigation= props.navigation;
  // getTour();
  
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <View>
      <Text>AccountScreen</Text>
      <Button title="Signup" onPress={() => {navigation.push('Main',{Pointed:'Signup'});}}/>
      <Button title="Signin" onPress={() => {navigation.push('Main',{Pointed:'Signin'});}}/>
      <Button title="AccountScreen" onPress={() => {navigation.push('Main',{Pointed:'AccountScreen'});}}/>
      
      <Text>Just testing</Text>
    </View>
  );
};

export default AccountScreen;
