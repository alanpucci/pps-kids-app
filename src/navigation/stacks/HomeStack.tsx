import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../components/screens/HomeScreen/HomeScreen.component';

export type LoginStackParamList = {
    Home: undefined;
};
const Stack = createStackNavigator<LoginStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'} screenOptions={{headerShown:false}}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack