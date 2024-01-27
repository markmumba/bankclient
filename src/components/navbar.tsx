
import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../services/fetcher";

const Navbar = (props: any) => {

    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav((prevState) => !prevState)
    }


    async function handleLogout() {
        await axiosInstance.post("/logout", {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        props.userData(null)
        props.handleUser()
    }

    return (
        <div className="w-full h-[80px] z-10 backdrop-blur-sm fixed  ">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center ">
                    <Link to="/"> <h1 className="text-3xl hover:border py-3 px-6 rounded-lg hover:bg-slate-200 font-bold sm:text-4xl ">Chase Bank</h1></Link>
                </div>
                {
                    props.user ? (
                        <div className="flex items-center">
                            <ul className="hidden md:flex ">
                                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                                <li><a href="#pricing">Transactions</a></li>
                                <li><a href="#contact">Accounts</a></li>
                            </ul>
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <ul className="hidden md:flex space-x-6 ">
                                <li className="border py-3 px-8 text-white rounded-lg bg-slate-500 hover:bg-white hover:text-black"><Link to="/login">Login</Link></li>
                                <li className="border py-3 px-8 rounded-lg hover:bg-slate-500 hover:text-white "><Link to="/register">Register</Link></li>
                            </ul>
                        </div>
                    )}
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    }

                </div>
            </div>
            {nav &&
                <ul className="absolute  bg-sky-950 border rounded-xl text-white w-full  px-8">
                    {
                        props.user ? (
                            <div className="items-center ">
                                <li className="border-b-2 p-4 text-l"><Link to="/" onClick={handleLogout}>Logout</Link></li>
                                <li className="border-b-2 p-4 text-l"><a href="#pricing">Transactions</a></li>
                                <li className="border-b-2 p-4 text-l"><a href="#contact">Accounts</a></li>
                            </div>
                        ) : (
                            <div className="items-center">
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </div>
                        )}
                </ul>
            }
        </div>
    )
}

export default Navbar;
