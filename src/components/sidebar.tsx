import { Link, useNavigate } from "react-router-dom";
import { Gear, CashCoin, House, BoxArrowRight } from "react-bootstrap-icons";
import { axiosInstance } from "../services/fetcher";
import { useState } from "react";


function SideBar(props: any) {
    const navigate = useNavigate();
    const [showSidebar, setShowSidebar] = useState(false);

    const handleToggleSidebar = () => {
        setShowSidebar((prev) => !prev);
    };

    async function handleLogout() {
        await axiosInstance.post("/logout", {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        navigate("/");
    }

    return (
        <>
            <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased text-gray-800">
                {/* Sidebar button for mobile */}
                <div className="md:hidden fixed top-4 right-4 z-50">
                    <button onClick={handleToggleSidebar} className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {showSidebar ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Sidebar */}
                <div className={`md:relative fixed inset-y-0 left-0 w-64 bg-white h-full border-r z-40 ${showSidebar ? 'block' : 'hidden md:block'}`}>
                    <div className="flex items-center justify-center h-14 border-b">
                        <div>Chase Bank</div>
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
                            <li className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <a href="#" className="inline-flex justify-center items-center ml-4">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
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
    );
}

export default SideBar;
