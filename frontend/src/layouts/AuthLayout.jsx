import { useState } from "react";
import axios from "axios";

const AdminForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });
    const [signupError, setSignupError] = useState("");
    const [signupMessage, setSignupMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSignupError("");
        setSignupMessage("");
        try {
            const response = await axios.post("http://127.0.0.1:1234/auth/signup", formData);
            setSignupMessage("Signup successful! Please log in.");
            console.log("Signup Successful", response.data);
        } catch (err) {
            setSignupError("Signup failed. Please check your details.");
            console.error("Signup Error", err);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Admin Registration</h2>
            {signupError && <p className="text-red-500">{signupError}</p>}
            {signupMessage && <p className="text-green-500">{signupMessage}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="w-full p-2 border rounded-lg" 
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="w-full p-2 border rounded-lg" 
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Phone</label>
                    <input 
                        type="number" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                        className="w-full p-2 border rounded-lg" 
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                        className="w-full p-2 border rounded-lg" 
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AdminForm;
