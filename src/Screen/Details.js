import React from 'react';
import {View, Text,Button} from 'react-native';
const AccountScreen = ({navigation}) => {
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
