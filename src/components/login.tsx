import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { axiosInstance } from "../services/fetcher";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/8292064.jpg";

function Login(props: any) {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(props.account);

    useEffect(() => {
        if (props.account) {
            setShowSuccessMessage(true);
            const timer = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 5000); // Message will disappear after 5 seconds

            return () => clearTimeout(timer);
        }
    }, [props.account]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setLogin((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const requestBody = JSON.stringify(login);
            await axiosInstance.post("/login", requestBody, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            props.handleUser(true);
            navigate("/");
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <>
            <div className="flex h-screen">
                <div className="w-1/2 bg-cover" style={{ backgroundImage: `url(${image})` }}>
                </div>

                <div className="w-1/2 px-20 py-40 mt-20">
                    {showSuccessMessage && (
                        <div className="border p-4 bg-lime-300 m-4 rounded-lg">
                            Your account has been created successfully. You can now log in.
                        </div>
                    )}
                    <h2 className="text-3xl font-bold mb-6">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                            <input type="email" id="email" name="email" onChange={handleChange} value={login.email} className="mt-1 p-3 rounded-md bg-gray-200 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                            <input type="password" id="password" name="password" onChange={handleChange} value={login.password} className="mt-1 p-3 rounded-md bg-gray-200 w-full" />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">Login</button>
                    </form>
                    <p className="mt-4 text-blue-700 underline"><Link to="/register">Don't have an account?</Link></p>
                </div>
            </div>
        </>
    );
}

export default Login;
