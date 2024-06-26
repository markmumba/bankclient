import { useEffect, useState } from "react";
import { axiosInstance } from "../services/fetcher";
import SideBar from "./sidebar";
import { formatMoneyString, getExpireDate, splitAccountNo } from "./helper";
import Transaction from "./transaction";
import ErrorPage from "./error";

function Dashboard(props: any) {
    const number: number = 5;
    const [showDetails, setShowDetails] = useState(false);
    const [userData, setUserData] = useState<Dashboard | null>(null);
    const [loading, setLoading] = useState(true);

    async function createSavingsAccount() {
        try {
            await axiosInstance.post("/account/create", {}, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            fetchUserData(); // Refresh user data to reflect the new account
        } catch (error) {
            console.error("Error creating account:", error);
        }
    }

    async function fetchUserData() {
        setLoading(true);
        try {
            const response = await axiosInstance.get("/user", {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setUserData(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUserData();
        if (props.transactionDetails) {
            setShowDetails(true);
            const timeoutId = setTimeout(() => {
                setShowDetails(false);
            }, 4000);

            return () => clearTimeout(timeoutId);
        }
    }, [props.transactionDetails]);

    const renderAccounts = () => {
        if (!userData) return null;

        return userData.account.map((account: AccountDetails) => (
            <div key={account.accountNumber} className="rounded-2xl flex-auto max-w-sm p-6 space-y-4 text-white shadow-lg bg-gradient-to-br from-cyan-500 via-indigo-400 to-slate-900 hover:bg-gradient-to-tr">
                <div className="flex justify-between">
                    <p className="md:text-xl">{`${account.accountType}'s Account`}</p>
                    <p>{getExpireDate(account.dateJoined)}</p>
                </div>
                <div className="text-lg md:text-xl">
                    <p>{splitAccountNo(account.accountNumber)}</p>
                </div>
                <div className="text-xl md:text-3xl">
                    <p>{formatMoneyString(account.balance)}</p>
                </div>
            </div>
        ));
    };

    return (
        <div className="overflow-hidden">
            {props.user ? (
                <div>
                    <div className="absolute pl-[50%] overflow-hidden pt-12">
                        {showDetails && props.transactionDetails && (
                            <div className="border p-4 bg-lime-300 m-4 rounded-lg">
                                A transaction has been made on your {props.transactionDetails.account_type}'s account
                            </div>
                        )}
                    </div>
                    <div className="flex py-20">
                        {loading ? (
                            <div className="flex justify-center items-center w-full">
                                <div className="spinner-border animate-spin inline-block w-40 h-40 border-4 rounded-full" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            userData ? (
                                <>
                                    <SideBar fullName={props.handleUserName(userData.user.fullname)} />
                                    <div className="absolute md:left-[30%]">
                                        <div>
                                            <h1 className="text-4xl font-bold">Dashboard</h1>
                                            <h2 className="text-slate-500">Welcome back, {userData.user.username}</h2>
                                        </div>
                                    </div>
                                    <div className="md:flex max-md:space-y-10 md:space-x-10 w-full absolute pt-24 md:left-[30%]">
                                        {renderAccounts()}
                                        {userData.account.length < 2 && (
                                            <button
                                                className="rounded-lg bg-indigo-500 text-white px-8 py-3 hover:bg-indigo-700 m-14"
                                                onClick={createSavingsAccount}
                                            >
                                                Add savings Account
                                            </button>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <h1>No user data available</h1>
                            )
                        )}
                        <Transaction number={number} />
                    </div>
                </div>
            ) : (
                <ErrorPage message="You are logged out of the app" />
            )}
        </div>
    );
}

export default Dashboard;
