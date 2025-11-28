import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from './AuthContext';

export default function HomeScreen({ navigation }) {
    const { user, logout } = useContext(AuthContext);

    console.log('HomeScreen - Physician home', { user });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to AIcare</Text>
            <Text style={styles.subtitle}>Healthcare Management Portal</Text>
            <Text style={styles.userInfo}>Logged in as: {user?.email}</Text>

            <View style={styles.buttonGroup}>
                <Button
                    title="View Patients"
                    onPress={() => {
                        console.log('HomeScreen - Navigating to PatientList');
                        navigation.navigate('PatientList');
                    }}
                    color="#2196F3"
                />
            </View>

            <View style={styles.spacer} />

            <Button
                title="Logout"
                onPress={logout}
                color="#d32f2f"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
    subtitle: { fontSize: 16, color: '#666', marginBottom: 20 },
    userInfo: { fontSize: 14, color: '#999', marginBottom: 30 },
    buttonGroup: { width: '100%', marginBottom: 20 },
    spacer: { height: 40 },
});
