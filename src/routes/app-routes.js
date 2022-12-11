import React from 'react';
import routes from '../constants/routes';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import AddTask from '../screens/add-task';
import colors from '../constants/colors';

const Stack = createStackNavigator();

const AppRoutes = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.headerSupport} />
            <StatusBar hidden />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={routes.home} component={Home} />
                <Stack.Screen name={routes.addTask} component={AddTask} />
            </Stack.Navigator>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerSupport: { position: 'absolute', height: '50%', backgroundColor: colors.blue, top: 0, left: 0, width: '100%' }
})

export default AppRoutes;