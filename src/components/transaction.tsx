import { useEffect, useState } from "react"
import { axiosInstance } from "../services/fetcher"

interface Transaction {
    recepientAccount: string,
    amount: string,
    type: string
    timestamp: string

}

function Transaction() {

    const [transactions, setTransactions] = useState<Transaction[] | null>([])

    async function getTransactions() {
        const response = await axiosInstance.get("/account/transactions", {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const content = response.data
        setTransactions(content)
    }

    useEffect(() => {
        (getTransactions)();
    }, [])

    return (
        <>
            <div>
                {transactions ? (
                    <div>
                        {transactions.map((transaction, index) => (
                            <div className="border rounded-lg flex flex-auto p-6" key={index}>
                                <p style={{ color: transaction.type === 'deposit' ? 'green' : 'red' }}>
                                    {transaction.type === 'deposit' ? '+' : '-'}
                                    {transaction.amount}</p>
                                <p>{transaction.recepientAccount ? transaction.recepientAccount : transaction.type}</p>
                                <p>{transaction.timestamp}</p>

                            </div>
                        ))}
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