import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { AuthContext } from './AuthContext';

const mockForms = [
    { id: '1', name: 'Daily Health Metrics', status: 'pending', lastSubmitted: 'Today' },
    { id: '2', name: 'Weekly Checkup', status: 'completed', lastSubmitted: '2 days ago' },
];

export default function PatientDashboardScreen({ navigation }) {
    const { user, logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.greeting}>Welcome, {user?.email}</Text>
                <Button title="Logout" onPress={logout} color="#d32f2f" />
            </View>

            <Text style={styles.title}>Your Forms</Text>

            <FlatList
                data={mockForms}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.formCard, item.status === 'pending' && styles.pending]}>
                        <View>
                            <Text style={styles.formName}>{item.name}</Text>
                            <Text style={styles.formStatus}>
                                Status: {item.status === 'pending' ? '⚠️ Pending' : '✓ Submitted'}
                            </Text>
                            <Text style={styles.formTime}>Last: {item.lastSubmitted}</Text>
                        </View>
                        <Button
                            title={item.status === 'pending' ? 'Fill Form' : 'View'}
                            onPress={() => navigation.navigate('PatientForm', { form: item })}
                        />
                    </View>
                )}
            />

            <Button
                title="View Charts & Reports"
                onPress={() => navigation.navigate('PatientCharts')}
                color="#2196F3"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    greeting: { fontSize: 18, fontWeight: '600' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
    formCard: {
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: '#4CAF50',
    },
    pending: {
        borderLeftColor: '#FF9800',
        backgroundColor: '#fff3e0',
    },
    formName: { fontSize: 16, fontWeight: '600', marginBottom: 5 },
    formStatus: { fontSize: 14, marginBottom: 5 },
    formTime: { fontSize: 12, color: '#999' },
});
