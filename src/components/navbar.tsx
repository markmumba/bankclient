import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props: any) => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav((prevState) => !prevState)
    }

    return (
        <>
            <div className="px-2 flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/"> 
                        <h1 className="text-3xl hover:border py-3 px-6 rounded-lg hover:bg-slate-200 font-bold sm:text-4xl">
                            M.M Bank
                        </h1>
                    </Link>
                </div>
                <div className="flex items-center space-x-4 md:hidden" onClick={handleClick}>
                    {!nav ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </div>
                <div className="hidden md:flex items-center">
                    <ul className="flex space-x-6">
                        <li className="border py-3 px-8 text-white rounded-lg bg-violet-500 hover:bg-violet-700">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="border py-3 px-8 rounded-lg hover:bg-indigo-700 hover:text-white">
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {nav && (
                <ul className="absolute top-16 bg-violet-600 border rounded-xl text-white w-full z-20 px-8">
                    {props.user ? (
                        <div className="flex flex-col items-center">
                            <li className="border-b-2 p-4 text-l">
                                <Link to="/">Logout</Link>
                            </li>
                            <li className="border-b-2 p-4 text-l">
                                <a href="#pricing">Transactions</a>
                            </li>
                            <li className="border-b-2 p-4 text-l">
                                <a href="#contact">Accounts</a>
                            </li>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <li className="p-4 text-xl border-b-2">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="p-4 text-xl border-b-2">
                                <Link to="/register">Register</Link>
                            </li>
                        </div>
                    )}
                </ul>
            )}
        </>
    )
}

export default Navbar;

