import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator