import { useEffect, useState } from "react"
import { axiosInstance } from "../services/fetcher"
import { formatMoneyString } from "./helper"

interface Transaction {
    recepientAccount: string,
    amount: string,
    type: string
    timestamp: string
    accountType: string

}

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
            <div className="absolute left-[30%] w-full top-[45%]">
                <h1 className=" font-bold text-3xl pb-3">My Transactions</h1>
                {transactions ? (
                    <div>
                        {transactions.map((transaction, index) => (
                            <div className=" max-w-4xl rounded-lg flex flex-auto px-6 py-3 space-x-40 my-3 bg-slate-100" key={index}>
                                <p style={{ color: transaction.type === 'deposit' ? 'green' : 'red' }}>
                                    {transaction.type === 'deposit' ? '+' : '-'}
                                    {formatMoneyString(transaction.amount)}</p>
                                <p>{transaction.recepientAccount ? transaction.recepientAccount : transaction.type}</p>
                                <p>{new Date(transaction.timestamp).toLocaleString()}</p>
                                <p>{transaction.accountType}</p>

                            </div>
                        ))}
                        <div className="absolute left-[40%] p-4">
                            <button className=" border px-6 py-3 rounded-lg bg-indigo-600 text-white">See more</button>
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
    )

}


export default Transaction;