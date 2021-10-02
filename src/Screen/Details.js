import React,{useReducer} from 'react';
import {View, Text,Button} from 'react-native';
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
const AccountScreen = ({navigation}) => {
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
