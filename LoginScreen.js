import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { AuthContext } from './AuthContext';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { physicianLogin, patientLogin, isLoading } = useContext(AuthContext);

    const handlePhysicianLogin = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter email and password');
            return;
        }
        physicianLogin(email, password);
    };

    const handlePatientLogin = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter email and password');
            return;
        }
        patientLogin(email, password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>AIcare</Text>
            <Text style={styles.subtitle}>Healthcare Management App</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                editable={!isLoading}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                editable={!isLoading}
            />

            <Button
                title={isLoading ? 'Logging in...' : 'Login as Physician'}
                onPress={handlePhysicianLogin}
                disabled={isLoading}
            />
            <View style={styles.spacer} />
            <Button
                title={isLoading ? 'Logging in...' : 'Login as Patient'}
                onPress={handlePatientLogin}
                disabled={isLoading}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
    subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 30, color: '#666' },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    spacer: { height: 10 },
});
