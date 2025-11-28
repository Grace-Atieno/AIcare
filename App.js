import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, AuthContext } from './AuthContext';
import LoginScreen from './LoginScreen';
import PhysicianNavigator from './PhysicianNavigator';
import PatientNavigator from './PatientNavigator';

function AppContent() {
  const { user } = useContext(AuthContext);

  console.log('App.js - Current user:', user);

  return (
    <NavigationContainer onReady={() => console.log('Navigation ready')}>
      {!user ? (
        <LoginScreen />
      ) : user.type === 'physician' ? (
        <PhysicianNavigator />
      ) : (
        <PatientNavigator />
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
