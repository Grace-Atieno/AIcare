// src/screens/AddMetricScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddMetricScreen({ route }) {
    const { patientId } = route.params || {}; // get patient ID if passed
    const [metric, setMetric] = useState('');

    const saveMetric = () => {
        alert(`Metric "${metric}" saved for patient ${patientId || 'unknown'}`);
        setMetric('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Metric {patientId ? `for patient ${patientId}` : ''}</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter metric value"
                value={metric}
                onChangeText={setMetric}
                keyboardType="numeric"
            />

            <Button title="Save Metric" onPress={saveMetric} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20 },
});

