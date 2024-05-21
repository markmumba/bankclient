import { Link, useNavigate } from "react-router-dom";
import { Gear, GraphUpArrow, CashCoin, House, BoxArrowRight } from "react-bootstrap-icons";
import { axiosInstance } from "../services/fetcher";


function SideBar(props: any) {
    const navigate = useNavigate()

    async function handleLogout() {
        await axiosInstance.post("/logout", {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        navigate("/login")
    }

    return (

        <>
            <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased  text-gray-800">
                <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
                    <div className="flex items-center justify-center h-14 border-b">
                        <div>Chase Bank </div>
                    </div>
                    <div className="overflow-y-auto overflow-x-hidden flex-grow">
                        <ul className="flex flex-col py-4 space-y-1">
                            <li className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <Link to="/dashboard">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <House size={20} />
                                    </span>
                                    <span className="ml-2 text-md tracking-wide truncate">Dashboard</span>
                                </Link>
                            </li>
                            <li className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <Link to="/transfer">
                                    <span className="inline-flex justify-center items-center ml-4 pt-1">
                                        <CashCoin size={20} className="" />
                                    </span>
                                    <span className="ml-2 text-md tracking-wide truncate">Transfer</span>
                                </Link>
                            </li>

                            <li>
                                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <GraphUpArrow size={20} />
                                    </span>
                                    <span className="ml-2 text-md tracking-wide truncate">statistics</span>
                                </a>
                            </li>

                         
                            <li>
                                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    </span>
                                    <span className="ml-2 text-md tracking-wide truncate">{props.fullName}</span>
                                </a>
                            </li>
                            <li className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <Gear size={20} />
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
                            </li>
                            <li onClick={handleLogout} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <BoxArrowRight size={20} />
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </>

    )

}


export default SideBar;


