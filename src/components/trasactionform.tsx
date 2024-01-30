

import { ChangeEvent, FormEvent, useState } from 'react';
import { axiosInstance } from '../services/fetcher';
import SideBar from './sidebar';
import { useNavigate } from 'react-router-dom';

function TransactionForm(props: any) {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        accountType: 'checking',
        amount: '',
    });

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const jsonFormData = JSON.stringify(formData)
            const response = await axiosInstance.post(`/account/${props.transactionType}`, jsonFormData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response) {
                props.handleTransactionDetails(response.data)
                navigate("/")
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className='py-20 flex'>
            <SideBar />
            <div className=''>
                <div className=" absolute w-full left-[35%] max-w-xl mt-8 p-10 border bg-white  rounded-lg shadow-md">

                    <h2 className="text-3xl font-bold mb-4">Make {props.transactionType}</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="accountType" className="block text-sm font-medium text-gray-600">
                                Account Type
                            </label>
                            <select
                                id="accountType"
                                name="accountType"
                                value={formData.accountType}
                                onChange={handleChange}
                                className="mt-1 p-2 border rounded-md w-full"
                            >
                                <option value="savings">Savings</option>
                                <option value="checking">Checking</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-600">
                                Amount
                            </label>
                            <input
                                type="number"
                                id="amount"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                className="mt-1 p-2 border rounded-md w-full"
                                placeholder="Enter amount"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-indigo-500 text-white px-6 py-3 my-4 rounded-md hover:bg-indigo-700"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TransactionForm;
