import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

export default function PatientFormScreen({ route, navigation }) {
    const { form } = route.params || {};
    const [metrics, setMetrics] = useState({
        bloodSugar: '',
        bloodPressure: '',
        weight: '',
    });

    const handleSubmit = () => {
        if (!metrics.bloodSugar || !metrics.bloodPressure || !metrics.weight) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }
        Alert.alert('Success', 'Form submitted! Data sent to AI for analysis.');
        setMetrics({ bloodSugar: '', bloodPressure: '', weight: '' });
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{form?.name || 'Health Form'}</Text>
            <Text style={styles.instruction}>Please enter your daily health metrics:</Text>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Blood Sugar (mg/dL)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g., 120"
                    keyboardType="numeric"
                    value={metrics.bloodSugar}
                    onChangeText={(val) => setMetrics({ ...metrics, bloodSugar: val })}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Blood Pressure (mmHg)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g., 120/80"
                    value={metrics.bloodPressure}
                    onChangeText={(val) => setMetrics({ ...metrics, bloodPressure: val })}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Weight (kg)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g., 75"
                    keyboardType="numeric"
                    value={metrics.weight}
                    onChangeText={(val) => setMetrics({ ...metrics, weight: val })}
                />
            </View>

            <Button title="Submit" onPress={handleSubmit} color="#4CAF50" />
            <View style={styles.spacer} />
            <Button
                title="Cancel"
                onPress={() => navigation.goBack()}
                color="#757575"
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    instruction: { fontSize: 14, color: '#666', marginBottom: 20 },
    inputGroup: { marginBottom: 20 },
    label: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    spacer: { height: 10 },
});
