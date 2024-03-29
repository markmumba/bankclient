import { useEffect, useState } from "react";
import { axiosInstance } from "../services/fetcher";
import SideBar from "./sidebar";
import { formatMoneyString, getExpireDate, splitAccountNo } from "./helper";
import Transaction from "./transaction";
import ErrorPage from "./error";



function Dashboard(props: any) {
    const number: number = 5

    const [showDetails, setShowDetails] = useState(false);




    const [userData, setUserData] = useState<Dashboard | null>()


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

        if (props.transactionDetails) {
            setShowDetails(true);
            const timeoutId = setTimeout(() => {
                setShowDetails(false);
            }, 4000);

            return () => clearTimeout(timeoutId);
        }
    }, [props.transactionDetails])



    return (
        <div className="overflow-hidden">
            <div>
                {props.user ? (<>
                    <div className="absolute pl-[50%] pt-12">
                        {showDetails && props.transactionDetails ? (
                            <div className="border p-4 bg-lime-300 m-4 rounded-lg">
                                A transaction has been on your {' '}
                                {props.transactionDetails.accountType}'s account
                            </div>
                        ):null}
                    </div>
                    <div className="flex py-20">

                        {userData ? (
                            <>
                                <div className="h-screen">
                                    <SideBar fullName={props.handleUserName(userData.user.fullname)} />
                                </div>


                                <div className="absolute left-[30%] ">
                                    <div>
                                        <h1 className="text-4xl font-bold ">Dashboard</h1>
                                        <h2 className="text-slate-500">Welcome back , {userData.user.username}</h2>
                                    </div>
                                </div>
                                <div className="flex space-x-10 w-full absolute pt-24 left-[30%]">
                                    {userData.account.length < 2 ? (
                                        <>
                                            {userData.account.map((account: AccountDetails) => (
                                                <div key={account.accountNumber} className="rounded-2xl flex-auto max-w-sm p-6 space-y-4 text-white shadow-lg bg-gradient-to-br from-cyan-500 via-indigo-400 to-slate-900 hover:bg-gradient-to-tr">
                                                    <div className="flex justify-between">
                                                        <p className="text-xl">{`${account.accountType}'s Account`}</p>
                                                        <p>{getExpireDate(account.dateJoined)}</p>
                                                    </div>
                                                    <div className="text-xl">
                                                        <p>{splitAccountNo(account.accountNumber)}</p>
                                                    </div>

                                                    <div className="text-3xl  ">
                                                        <p>{formatMoneyString(account.balance)}</p>
                                                    </div>
                                                </div>
                                            ))}
                                            <div>
                                                <button className="rounded-lg bg-indigo-500  text-white px-8 py-3 hover:bg-indigo-700 m-14">Add  savings Account</button>
                                            </div>
                                        </>
                                    ) : (
                                        // Display all accounts
                                        userData.account.map((account: AccountDetails) => (
                                            <div key={account.accountNumber} className="rounded-2xl flex-auto max-w-sm p-6 space-y-4 text-white shadow-lg bg-gradient-to-br from-cyan-500 via-indigo-400 to-slate-900 hover:bg-gradient-to-tr">
                                                <div className="flex justify-between">
                                                    <p className="text-xl">{`${account.accountType}'s Account`}</p>
                                                    <p>{getExpireDate(account.dateJoined)}</p>
                                                </div>
                                                <div className="text-xl">
                                                    <p>{splitAccountNo(account.accountNumber)}</p>
                                                </div>
                                                <div className="text-3xl">
                                                    <p>{formatMoneyString(account.balance)}</p>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>

                            </>
                        ) : (<>
                            <h1>No user data available</h1>
                        </>)
                        }

                        <Transaction number={number} />
                    </div>
                </>) :
                    (<>
                        <ErrorPage message={'You are logged out of the app'} />
                    </>)
                }
            </div>
        </div>
    )
}


export default Dashboard;