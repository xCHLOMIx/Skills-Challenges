import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null); // Initially null
    const [isLoading, setIsLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Handle errors

    //   Fetch user profile when component mounts
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get("http://localhost:1234/auth/profile", {
                    withCredentials: true,
                });
                console.log("Profile Response:", response.data);
                setUserData(response.data);
            } catch (err) {
                console.error("Profile Fetch Error:", err);
                setError("Failed to fetch user profile");
            } finally {
                setIsLoading(false); // Stop loading
            }
        };

        fetchUserProfile();
    }, []);

    //   Login function
    const login = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("http://localhost:1234/auth/profile", {
                withCredentials: true,
            });
            setUserData(response.data);
            setError(null);
        } catch (err) {
            console.error("Login Error:", err);
            setError("Login failed. Please try again.");
            setUserData(null);
        } finally {
            setIsLoading(false);
        }
    };

    //   Logout function
    const logout = async () => {
        setIsLoading(true);
        try {
            await axios.post("http://localhost:1234/auth/logout", {}, { withCredentials: true });
            setUserData(null);
            setError(null);
            console.log("Logged out successfully");
        } catch (err) {
            console.error("Logout Error:", err);
            setError("Logout failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ userData, login, logout, isLoading, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
