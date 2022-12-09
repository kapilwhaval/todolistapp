import React from 'react';
import routes from '../constants/routes';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import Signup from '../screens/signup';

const Stack = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.login} component={Login} />
            <Stack.Screen name={routes.signup} component={Signup} />
        </Stack.Navigator>
    );
}

export default AuthRoutes;