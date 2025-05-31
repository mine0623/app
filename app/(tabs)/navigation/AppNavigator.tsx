import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/login/login';
import Pass from '../screens/login/pass';
import Home from '../screens/home/home'

export type RootStackParamList = {
  Login: undefined;
  Pass: { email: string; isNewUser: boolean };
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavi() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Pass" component={Pass} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavi;