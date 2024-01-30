import { useEffect, useState } from "react";
import SideBar from "./sidebar";
import { axiosInstance } from "../services/fetcher";
import { formatDate, formatMoneyString } from "./helper";


function MainTransaction() {

    const [transactions, setTransactions] = useState<Transaction[] | null>([])

    async function getTransactions() {
        const response = await axiosInstance.get("/account/transactions", {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const content = (response.data)
        setTransactions(content)

    }

    useEffect(() => {
        (getTransactions)();
    }, [])


    return (
        <>
            <div className="flex ">
                <SideBar />
                <>
                    <div className="absolute left-[30%] w-full top-[5%] bg-white">
                        <h1 className=" font-bold text-3xl pb-3">My Transactions</h1>
                        {transactions ? (
                            <div>
                                <div className="flex flex-col max-w-5xl">
                                    {transactions.map((transaction, index) => (
                                        <div className="flex items-center justify-between rounded-lg px-6 py-3 my-3 bg-slate-100" key={index}>
                                            <div style={{ color: transaction.type === 'deposit' ? 'green' : 'red' }}>
                                                {transaction.type === 'deposit' ? '+' : '-'}
                                                {formatMoneyString(transaction.amount)}
                                            </div>
                                            <div>{transaction.recepientAccount ? transaction.recepientAccount : transaction.type}</div>
                                            <div>{formatDate(transaction.timestamp)}</div>
                                            <div>{transaction.accountType}</div>
                                        </div>
                                    ))}
                                </div>

                            </div>

                        )
                            : (
                                <div>
                                    <h1>Loading transactions</h1>
                                </div>
                            )}

                    </div>
                </>

            </div>
        </>
    )
}

export default MainTransaction;