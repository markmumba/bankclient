import { Link } from "react-router-dom";
import SideBar from "./sidebar";


function Transfer(props: any) {
    return (
        <>
            <div className="py-20 flex">

                <SideBar fullName={props.username} />
                <div className="absolute left-[35%] flex flex-col ">
                    <button onClick={() => props.handleTransactionType('deposit')} className="border px-64 py-4 rounded-lg bg-indigo-500 text-white text-xl my-5">
                        <Link to="/form">
                            Deposit
                        </Link>
                    </button>
                    <button onClick={() => props.handleTransactionType('withdraw')} className="border px-64 py-4 rounded-lg bg-indigo-500 text-white text-xl my-5">
                        <Link to="/form"> withdraw</Link></button>
                    <button className="border  px-64 py-4 rounded-lg bg-indigo-500 text-white text-xl my-5">Transfer Funds</button>
                </div>
            </div>
        </>
    )
}

export default Transfer;