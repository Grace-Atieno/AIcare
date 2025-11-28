import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

export default function FormBuilderScreen({ route, navigation }) {
    const { patient } = route.params || {};
    const [formFields, setFormFields] = useState([
        { id: 1, label: 'Blood Sugar', type: 'numeric', unit: 'mg/dL' },
        { id: 2, label: 'Blood Pressure', type: 'text', unit: 'mmHg' },
        { id: 3, label: 'Weight', type: 'numeric', unit: 'kg' },
    ]);
    const [newField, setNewField] = useState('');

    const addField = () => {
        if (!newField.trim()) {
            Alert.alert('Error', 'Please enter field name');
            return;
        }
        setFormFields([
            ...formFields,
            {
                id: Math.random(),
                label: newField,
                type: 'numeric',
                unit: '',
            },
        ]);
        setNewField('');
    };

    const removeField = (id) => {
        setFormFields(formFields.filter((f) => f.id !== id));
    };

    const saveForm = () => {
        Alert.alert('Success', `Form with ${formFields.length} fields saved for ${patient?.name || 'patient'}`);
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Create Form for {patient?.name || 'Patient'}
            </Text>

            <Text style={styles.subtitle}>Current Fields:</Text>
            {formFields.map((field) => (
                <View key={field.id} style={styles.fieldItem}>
                    <View style={styles.fieldInfo}>
                        <Text style={styles.fieldLabel}>{field.label}</Text>
                        <Text style={styles.fieldUnit}>{field.unit}</Text>
                    </View>
                    <Button title="Remove" onPress={() => removeField(field.id)} color="#d32f2f" />
                </View>
            ))}

            <Text style={styles.subtitle}>Add New Field:</Text>
            <TextInput
                style={styles.input}
                placeholder="Field name (e.g., Heart Rate)"
                value={newField}
                onChangeText={setNewField}
            />
            <Button title="Add Field" onPress={addField} />

            <View style={styles.spacer} />
            <Button title="Save Form" onPress={saveForm} color="#4CAF50" />
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
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    subtitle: { fontSize: 16, fontWeight: '600', marginTop: 15, marginBottom: 10 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    fieldItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#f5f5f5',
        marginBottom: 10,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#2196F3',
    },
    fieldInfo: { flex: 1 },
    fieldLabel: { fontSize: 16, fontWeight: '600' },
    fieldUnit: { fontSize: 12, color: '#999' },
    spacer: { height: 20 },
});
