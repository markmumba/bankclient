import { ChangeEvent, FormEvent, useState } from "react";
import { axiosInstance } from "../services/fetcher";
import { useNavigate } from "react-router-dom";
import image from "../assets/8292064.jpg";

function Register(props: any) {
    const navigate = useNavigate();

    const [register, setRegister] = useState({
        user_name: "",
        email: "",
        full_name: "",
        password: ""
    });

    console.log(register);
    console.log(JSON.stringify(register));

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setRegister((prevRegister) => ({
            ...prevRegister,
            [name]: value
        }));
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
                props.setAccount(true);
                navigate("/login");
            }

        } catch (error) {
            console.error('Error :', error);
        }
    }

    return (
        <>
            <div className="flex h-screen">
                <div className="w-1/2 bg-cover" style={{ backgroundImage: `url(${image})` }}>
                </div>

                <div className="w-1/2 px-20 py-40 mt-20">
                    <h2 className="text-3xl font-bold mb-6">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="user_name" className="block text-sm font-medium text-gray-600">Username</label>
                            <input type="text" id="user_name" name="user_name" onChange={handleChange} value={register.user_name} className="mt-1 p-3 rounded-md bg-gray-200 text-black w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                            <input type="email" id="email" name="email" onChange={handleChange} value={register.email} className="mt-1 p-3 rounded-md bg-gray-200 text-black w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="full_name" className="block text-sm font-medium text-gray-600">Full Name</label>
                            <input type="text" id="full_name" name="full_name" onChange={handleChange} value={register.full_name} className="mt-1 p-3 rounded-md bg-gray-200 text-black w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                            <input type="password" id="password" name="password" onChange={handleChange} value={register.password} className="mt-1 p-3 rounded-md bg-gray-200 text-black w-full" />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-3 px-8 rounded-md hover:bg-blue-600">Register</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
