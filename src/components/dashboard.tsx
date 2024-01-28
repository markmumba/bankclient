import { useEffect, useState } from "react";
import { axiosInstance } from "../services/fetcher";
import SideBar from "./sidebar";
import { formatMoneyString, getExpireDate, splitAccountNo } from "./helper";

interface UserDetails {
    username: string;
    fullname: string;
}

interface AccountDetails {
    accountNumber: string;
    accountType: string;
    balance: string;
    dateJoined: string;
}

interface Dashboard {
    user: UserDetails;
    account: AccountDetails[];
}

function Dashboard(props: any) {

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
        props.handleUserData(content)
    }

    useEffect(() => {
        (userdata)();
    }, [])



    return (
        <div className="">
            <div>
                {props.userState ? (
                    <div className="flex py-20">
                        {userData ? (
                            <>
                                <div className="h-screen">
                                    <SideBar fullName={userData.user.fullname} />
                                </div>
                                <div className="absolute left-1/4 ">
                                    <h1 className="text-4xl font-bold ">Dashboard</h1>
                                    <h2 className="text-slate-500">Welcome back , {userData.user.username}</h2>
                                </div>
                                <div className="flex space-x-10 w-full absolute pt-24 left-1/4 ">
                                    {userData.account.map((account: AccountDetails) => (

                                        <div className="rounded-2xl  flex-auto max-w-sm p-6 space-y-4 text-white  shadow-lg  bg-gradient-to-br from-cyan-500  via-indigo-500 to-slate-900">
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
                                    ))}
                                </div>
                            </>
                        ) : (<>
                            <h1>No user data available</h1>
                        </>)
                        }
                    </div>) :
                    (<>
                        <h1>You are logged out of the app </h1>
                    </>)
                }
            </div>
        </div>
    )
}


export default Dashboard;