import { useEffect, useState } from "react"
import { axiosInstance } from "../services/fetcher"
import { formatDate, formatMoneyString } from "./helper"
import { Link } from "react-router-dom"



function Transaction(props: any) {

    const [transactions, setTransactions] = useState<Transaction[] | null>([])

    async function getTransactions() {
        const response = await axiosInstance.get("/account/transactions", {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const content = (response.data)
        if (props.number) {
            const lastfive = content.slice(0, props.number);
            setTransactions(lastfive)
        } else {
            setTransactions(content)
        }

    }

    useEffect(() => {
        (getTransactions)();
    }, [])

    return (
        <>
            <div className={`absolute  md:left-[30%] w-full top-[45%] max-md:pt-40`}>
                <h1 className=" font-bold text-2xl md:text-3xl pb-3">My Transactions</h1>
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
                        {transactions && transactions.length > 0 && (
                            <div className="absolute  p-2">
                                <button className="border px-6 py-3 rounded-lg bg-indigo-600 text-white">
                                    <Link to="/transactions">See more</Link>
                                </button>
                            </div>
                        )}

                    </div>

                )
                    : (
                        <div>
                            <h1>Loading transactions</h1>
                        </div>
                    )}

            </div>
        </>
    )

}


export default Transaction;