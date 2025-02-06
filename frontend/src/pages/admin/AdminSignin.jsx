import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";
const AdminSignin = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [loginError, setLoginError] = useState("");
    const [loginMessage, setLoginMessage] = useState("");

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoginError("");
        setLoginMessage("");
        try {
            const response = await axios.post("http://localhost:1234/auth/loginAdmin", loginData);
            setLoginMessage("Login successful!");
            login();
            //redirect to admin dashboard
            // navigate('/admin/dashboard');
            console.log("Login Successful", response.data);
        } catch (err) {
            setLoginError("Login failed. Please check your credentials.");
            console.error("Login Error", err);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
            {loginError && <p className="text-red-500">{loginError}</p>}
            {loginMessage && <p className="text-green-500">{loginMessage}</p>}
            <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleChanges}
                        required
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChanges}
                        required
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default AdminSignin;