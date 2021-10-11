import React, {useReducer,useContext} from 'react';
import {View, Text, Button} from 'react-native';
const axios = require('axios');
import Context from '../DataContext/createDataContext';

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

const AccountScreen = props => {
  const navigation = props.navigation;
  const {state} = useContext(Context);
  // getTour();

  // const [state, dispatch] = useReducer(reducer, []);

  return (
    <View>
      <Text>AccountScreen</Text>
      <Button
        title="Signup"
        onPress={() => {
          navigation.push('Main', {Pointed: 'Signup'});
        }}
      />
      <Button
        title="Signin"
        onPress={() => {
          navigation.push('Main', {Pointed: 'Signin'});
        }}
      />
      <Button
        title="AccountScreen"
        onPress={() => {
          navigation.push('Main', {Pointed: 'AccountScreen'});
        }}
      />

      {state.isSignedIn? <Text>You are Signin</Text>:<Text>You Not are Signin</Text>}
    </View>
  );
};

export default AccountScreen;
