import React, {useState, useReducer, useContext} from 'react';
import {View} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {SignupStyle} from '../Style/Style';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Context from '../DataContext/createDataContext';
 

const Signin = ({navigation}) => {
  const [email, setEmail] = useState("lisa@example.com");
  const [password, setPassword] = useState("test1234");
  const {signin} = useContext(Context);
  return (
    <View style={SignupStyle.container}>
      <View style={SignupStyle.title}>
        <Text h3>Login</Text>
      </View>
      <Input
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        leftIcon={<Entypo name="email" size={24} color="black" />}
      />

      <Input
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        leftIcon={<Ionicons name="lock" size={24} color="black" />}
      />
      <Button
        title="Login"
        onPress={() => {
          signin({email, password});
        }}
      />
      {/* <Button title="Login" onPress={() =>{navigation.push('Signin')}}/> */}
    </View>
  );
};

export default Signin;
