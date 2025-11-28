// src/screens/PatientListScreen.js
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const patients = [
    { id: '1', name: 'John Doe', age: 45 },
    { id: '2', name: 'Jane Smith', age: 52 },
    { id: '3', name: 'Mary Johnson', age: 36 },
];

export default function PatientListScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Patient List</Text>

            <FlatList
                data={patients}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name}, Age: {item.age}</Text>
                        <Button
                            title="Add Metric"
                            onPress={() => navigation.navigate('AddMetric', { patientId: item.id })}
                        />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
    item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});
