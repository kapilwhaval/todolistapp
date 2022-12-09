import React from 'react';
import routes from '../constants/routes';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import { SafeAreaView, StatusBar } from 'react-native';

const Stack = createStackNavigator();

const AppRoutes = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={routes.home} component={Home} />
            </Stack.Navigator>
        </SafeAreaView>
    );
}

export default AppRoutes;