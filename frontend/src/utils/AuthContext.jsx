import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Fetch user profile when component mounts
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get("http://localhost:1234/auth/profile", {
                    withCredentials: true, // Important for cookies
                });

                console.log("Profile Response:", response.data);
                setUser(response.data.user); // Ensure correct field from backend
            } catch (err) {
                console.error("Profile Fetch Error:", err);
            }
        };

        fetchUserProfile();
    }, []);

    // ✅ Add login function
    const login = async () => {
        try {
            const response = await axios.get("http://localhost:1234/auth/profile", {
                withCredentials: true,
            });

            setUser(response.data.user); // Store authenticated user
        } catch (err) {
            console.error("Login Error:", err);
            setUser(null); // Reset if login fails
        }
    };

    // ✅ Logout function
    const logout = () => {
        setUser(null);
        axios.post("http://localhost:1234/auth/logout", {}, { withCredentials: true })
            .then(() => console.log("Logged out"))
            .catch(err => console.error("Logout Error:", err));
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
