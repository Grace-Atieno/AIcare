// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to NCD Care App</Text>

            <Button
                title="View Patients"
                onPress={() => navigation.navigate('PatientListScreen')}
            />

            <Button
                title="Add Metric"
                onPress={() => navigation.navigate('addmetricsScreen')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 22, marginBottom: 20 },
});
