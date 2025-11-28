import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../AICare/HomeScreen';
import PatientListScreen from '../AICare/PatientListScreen';
import AddMetricScreen from '../AICare/addmetricsScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="PatientList" component={PatientListScreen} />
            <Stack.Screen name="AddMetric" component={AddMetricScreen} />
        </Stack.Navigator>
    );
}

