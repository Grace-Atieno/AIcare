import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import PatientListScreen from './PatientListScreen';
import AddMetricScreen from './addmetricsScreen';
import FormBuilderScreen from './FormBuilderScreen';

const Stack = createNativeStackNavigator();

export default function PhysicianNavigator() {
    console.log('PhysicianNavigator - Rendering physician stack');
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animationEnabled: true,
            }}
        >
            <Stack.Screen name="PhysicianHome" component={HomeScreen} />
            <Stack.Screen name="PatientList" component={PatientListScreen} />
            <Stack.Screen name="FormBuilder" component={FormBuilderScreen} />
            <Stack.Screen name="AddMetric" component={AddMetricScreen} />
        </Stack.Navigator>
    );
}
