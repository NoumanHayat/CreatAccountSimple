import React from 'react';
import {View} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {SignupStyle} from '../Style/Style';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const Signup = ({navigation}) => {
  return (
    <View style={SignupStyle.container}>
      <View style={SignupStyle.title}><Text h3>Signup</Text></View>
      <Input
        placeholder="Email"
        leftIcon={<Entypo name="email" size={24} color="black" />}
      />
      <Input
        placeholder="User Name"
        leftIcon={<Ionicons name="user" size={24} color="black" />}
      />
      <Input
        placeholder="Phone Number"
        leftIcon={<Entypo name="phone" size={24} color="black" />}
      />
      <Input
        placeholder="Password"
        leftIcon={<Ionicons name="lock" size={24} color="black" />}
      />
      <Button title="Creat Account" />
      {/* <Button title="Login" onPress={() =>{navigation.push('Signin')}}/> */}
    </View>
  );
};

export default Signup;
