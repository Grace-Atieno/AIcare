import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const physicianLogin = (email, password) => {
        setIsLoading(true);
        // TODO: Replace with actual API call
        setTimeout(() => {
            setUser({ type: 'physician', email, id: '1' });
            setIsLoading(false);
        }, 1000);
    };

    const patientLogin = (email, password) => {
        setIsLoading(true);
        // TODO: Replace with actual API call
        setTimeout(() => {
            setUser({ type: 'patient', email, id: '2' });
            setIsLoading(false);
        }, 1000);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, physicianLogin, patientLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
