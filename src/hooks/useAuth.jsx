import { useState } from 'react';
import { AuthApi } from '../api/AuthApi';

export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const executeRegistration = async (email, password, username) => {
        setIsLoading(true);
        setError(null); // Clear any previous errors

        try {
            // Send data to C# Backend
            const response = await AuthApi.registerUser(email, password, username);
            
            // On success automatically log them in depending on your UX flow.
            return response;
        } catch (err) {
            // Catch network errors or C# validation errors (like "Email already exists")
            setError(err.message || "An unexpected error occurred during registration.");
            throw err; 
        } finally {
            // Turn off the loading spinner
            setIsLoading(false);
        }
    };

    const executeLogin = async (email, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await AuthApi.loginUser(email, password);
            console.log("Login Success:", response);
            return response;
        } catch (err) {
            setError(err.message || "An unexpected error occurred during login.");
            throw err; 
        } finally {
            setIsLoading(false);
        }
    };

    return { executeRegistration, executeLogin, isLoading, error };
  };