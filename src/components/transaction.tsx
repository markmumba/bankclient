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
            const lastfive = content.slice(-props.number);
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
            <div className={`absolute left-[30%] w-full top-[45%]`}>
                <h1 className=" font-bold text-3xl pb-3">My Transactions</h1>
                {transactions ? (
                    <div>
                        {transactions.map((transaction, index) => (
                            <div className=" max-w-4xl rounded-lg flex flex-auto px-6 py-3 space-x-40 my-3 bg-slate-100" key={index}>
                                <p style={{ color: transaction.type === 'deposit' ? 'green' : 'red' }}>
                                    {transaction.type === 'deposit' ? '+' : '-'}
                                    {formatMoneyString(transaction.amount)}</p>
                                <p>{transaction.recepientAccount ? transaction.recepientAccount : transaction.type}</p>
                                <p>{formatDate(transaction.timestamp)}</p>
                                <p>{transaction.accountType}</p>

                            </div>
                        ))}

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