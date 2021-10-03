import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStyles} from './src/Style/Style';
import DetailsScreen from './src/Screen/Details';
import Signin from './src/Screen/Signin';
import Signup from './src/Screen/Signup';
import {createStackNavigator} from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function Main(props) {
  const point =
    props.route.params !== undefined ? props.route.params.Pointed : 'Signin';
  return (
    <Tab.Navigator 
      screenOptions={({route}) => ({
        headerShown: false,
        
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name == 'Signin') {
            iconName = 'sign-in';
          } else if (route.name == 'Signup') {
            iconName = 'sign-out';
          } else {
            iconName = 'newspaper-o';
          }
          return (
          // <Ionicons name={{iconName}} size={24} color="black" />
          <Ionicons name={iconName} size={24} color="black" />);
        },
        
      })}
     
      initialRouteName={point} >
      <Tab.Screen name="Signin" component={Signin} />
      <Tab.Screen name="Signup" component={Signup} />
      <Tab.Screen name="DetailsScreen" component={DetailsScreen} />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
