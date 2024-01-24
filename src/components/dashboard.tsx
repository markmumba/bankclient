import { useEffect, useState } from "react";
import { axiosInstance } from "../services/fetcher";

interface User {
    user: {
        username: string;
        email: string;
    };
    account: Record<string, string>; // Assuming accountDetails is an object with string keys and values
}
function Dashboard() {

    const [userData, setUserData] = useState<User | null>()

    async function userdata() {
        const response = await axiosInstance.get("/user", {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const content = response.data
        setUserData(content)
    }

    useEffect(() => {
        (userdata)();
    }, [])



    return (
        <div className="pt-24">
            <div>
                <h2>User Details</h2>
                {userData && (
                    <div>
                        <p>Email: {userData.user.email}</p>
                        <p>Username: {userData.user.username}</p>
                    </div>
                )}

                <h2>Account Details</h2>
                {userData && userData.account && (
                    <ul>
                        {Object.entries(userData.account).map(([accountNumber, accountType]) => (
                            <li key={accountNumber}>
                                <strong>Account Number:</strong> {accountNumber}, <strong>Account Type:</strong> {accountType}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}


export default Dashboard;