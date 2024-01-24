import { ChangeEvent, FormEvent, useState } from "react";
import { axiosInstance } from "../services/fetcher";
import {  useNavigate } from "react-router-dom";


function Register() {
    const navigate = useNavigate()

    const [register, setRegister] = useState({
        userName: "",
        email: "",
        fullName: "",
        password: ""
    })

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setRegister((prevRegister) => ({
            ...prevRegister,
            [name]: value
        }))
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const requestBody = JSON.stringify(register);

            const response = await axiosInstance.post("user/create", requestBody, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response) {
                navigate("/login")
            }

        } catch (error) {
            console.error('Error :', error);
        }

    };


    return (
        <div className="pt-40">
            <div className="container mx-auto max-w-md  p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-8">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
                        <input type="text" id="username" name="userName" onChange={handleChange} value={register.userName} className="mt-1 p-3 rounded-md bg-gray-200 text-black w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                        <input type="email" id="email" name="email" onChange={handleChange} value={register.email} className="mt-1 p-3 rounded-md bg-gray-200 text-black w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-600">Full Name</label>
                        <input type="text" id="fullname" name="fullName" onChange={handleChange} value={register.fullName} className="mt-1 p-3 rounded-md bg-gray-200 text-black w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input type="password" id="password" name="password" onChange={handleChange} value={register.password} className="mt-1 p-3 rounded-md bg-gray-200 text-black w-full" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">Register</button>
                </form>
            </div>


        </div>
    )

}

export default Register;