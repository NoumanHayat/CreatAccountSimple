import React ,{useState} from 'react';
import {View} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {SignupStyle} from '../Style/Style';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
//Reducer function

const Signup = ({navigation}) => {
  const [Email,setEmail]= useState('');
  const [userName,setUserName]= useState('');
  const [phone,setPhone]= useState('');
  const [password,setPassword]= useState('');
  return (
    <View style={SignupStyle.container}>
      <View style={SignupStyle.title}><Text h3>Signup</Text></View>
      <Input
        placeholder="Email" value={Email} onChangeText={(text)=>setEmail(text)}
        leftIcon={<Entypo name="email" size={24} color="black" />}
      />
      <Input
        placeholder="User Name" value={userName} onChangeText={(text)=>setUserName(text)}
        leftIcon={<Ionicons name="user" size={24} color="black" />}
      />
      <Input
        placeholder="Phone Number" value={phone} onChangeText={(text)=>setPhone(text)}
        leftIcon={<Entypo name="phone" size={24} color="black" />}
      />
      <Input
        placeholder="Password" value={password} onChangeText={(text)=>setPassword(text)}
        leftIcon={<Ionicons name="lock" size={24} color="black" />}
      />
      <Button title="Creat Account" />
      {/* <Button title="Login" onPress={() =>{navigation.push('Signin')}}/> */}
    </View>
  );
};

export default Signup;
