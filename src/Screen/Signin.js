import React, {useState, useReducer, useContext} from 'react';
import {View} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {SignupStyle} from '../Style/Style';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Context from '../DataContext/createDataContext';
import axios from 'axios';
import Test from '../Api/Test';
// const ApiCall = async () => {
//   // console.log('working')
//   // return async ({email,password})=>{
//   try {
//     console.log('working');
//     const response = await axios.post(
//       'http://192.168.137.16:3000/api/v1/users/login',
//       {
//         //   email :email,
//         // password : password
//         email: 'lisa@example.com',
//         password: 'test1234',
//       },
//     );

//     console.log(response.data);
//   } catch (error) {
//     console.log(error.message);
//   }
//   // }
// };

const Signin = ({navigation}) => {
  const [email, setEmail] = useState("lisa@example.com");
  const [password, setPassword] = useState("test1234");
  const {signin} = useContext(Context);
  // console.log(value);
  // const {state,signin}=useReducer(Provider);
  // console.log(signin);
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
