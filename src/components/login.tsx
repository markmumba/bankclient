import { ChangeEvent, FormEvent, useState } from "react";
import { axiosInstance } from "../services/fetcher";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate()
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setLogin((prevState) => ({
            ...prevState,
            [name]: value
        }))

    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const requestBody = JSON.stringify(login)
            await axiosInstance.post("/login", requestBody, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
            navigate("/")
        } catch (error) {
            console.error("Error:", error)
        }
    }


    return (
        <div className="pt-10">
            <div className="container mx-auto max-w-md p-8 mt-10 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-8">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                        <input type="email" id="email" name="email" onChange={handleChange} value={login.email} className="mt-1 p-3 rounded-md bg-gray-200 text-white w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input type="password" id="password" name="password" onChange={handleChange} value={login.password} className="mt-1 p-3 rounded-md bg-gray-200 text-white w-full" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">Login</button>
                </form>
            </div>
        </div>
    )

}


export default Login;