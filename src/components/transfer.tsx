import { Link } from "react-router-dom";
import SideBar from "./sidebar";


function Transfer(props: any) {
    return (
        <>
            <div className=" flex py-24">
                <SideBar  />
                <div className="md:mx-[10%] flex flex-col w-full  items-center  bg-white ">

                    <Link to="/form">
                        <button onClick={() => props.handleTransactionType('deposit')} className="border px-20 md:px-44 py-4  rounded-lg bg-indigo-500 text-white text-xl my-5">
                            Deposit
                        </button>
                    </Link>

                    <Link to="/form">
                        <button onClick={() => props.handleTransactionType('withdraw')} className="border px-20 md:px-44 py-4  rounded-lg bg-indigo-500 text-white text-xl my-5">
                            Withdraw
                        </button>
                    </Link>

                    <Link to="/form">
                        <button onClick={() => props.handleTransactionType('transferfunds')} className="border  px-14 md:px-36 py-4 rounded-lg bg-indigo-500 text-white text-xl my-5">
                            Transfer Funds
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Transfer;