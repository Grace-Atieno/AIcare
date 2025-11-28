import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PatientDashboardScreen from './PatientDashboardScreen';
import PatientFormScreen from './PatientFormScreen';
import PatientChartsScreen from './PatientChartsScreen';

const Stack = createNativeStackNavigator();

export default function PatientNavigator() {
    console.log('PatientNavigator - Rendering patient stack');
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                animationEnabled: true,
            }}
        >
            <Stack.Screen
                name="PatientDashboard"
                component={PatientDashboardScreen}
                options={{ title: 'My Forms' }}
            />
            <Stack.Screen
                name="PatientForm"
                component={PatientFormScreen}
                options={{ title: 'Fill Form' }}
            />
            <Stack.Screen
                name="PatientCharts"
                component={PatientChartsScreen}
                options={{ title: 'My Reports' }}
            />
        </Stack.Navigator>
    );
}
