import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import AuthRoutes from './auth-routes';
import AppRoutes from './app-routes';

const Routes = () => {

    const { user } = useSelector(state => state.userDetails);

    return (
        <NavigationContainer>
            <StatusBar barStyle={'light-content'} hidden={!user} />
            {user ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    );
}

export default Routes;