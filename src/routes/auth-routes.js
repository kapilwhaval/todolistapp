import React from 'react';
import routes from '../constants/routes';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';

const Stack = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.login} component={Login} />
        </Stack.Navigator>
    );
}

export default AuthRoutes;