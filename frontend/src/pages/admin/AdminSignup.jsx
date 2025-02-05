import { useState } from "react";
import axios from "axios";

const AdminSignup = () => {
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
            const response = await axios.post("http://127.0.0.1:1234/auth/signupAdmin", formData);
            setSignupMessage("Signup successful! Please log in.");
            console.log("Signup Successful", response.data);
        } catch (err) {
            setSignupError("Signup failed. Please check your details.");
            console.error("Signup Error", err);
        }
    };

    return (
        <div className="h-lvh w-full flex justify-center items-center">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-4">Sign up</h2>
                {signupError && <p className="text-red-500">{signupError}</p>}
                {signupMessage && <p className="text-green-500">{signupMessage}</p>}
                <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-3">
                    <div classname="">
                        <label className="block text-gray-700">Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 pl-3 border rounded-md mt-2"
                        />
                    </div>
                    <div classname="">
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="johndoe@email.com"
                            required
                            className="w-full p-2 pl-3 border rounded-md mt-2"
                        />
                    </div>
                    <div classname="">
                        <label className="block text-gray-700">Phone:</label>
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="07888888"
                            required
                            className="w-full p-2 pl-3 border rounded-md mt-2"
                        />
                    </div>
                    <div classname="w-full">
                        <label className="block text-gray-700">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                            className="w-full p-2 pl-3 border rounded-md mt-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 font-semibold rounded-md hover:bg-blue-600">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminSignup;
