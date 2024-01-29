import { Link } from "react-router-dom";
import { PersonCircle, CashStack, GraphUpArrow } from "react-bootstrap-icons";


function SideBar({ fullName }: any) {

    return (
        <div className=" h-screen font-semibold  p-6">

            <div className="text-l mb-4  hover:bg-slate-50">
                <Link to="/">
                    <div className="px-7">
                        <PersonCircle className="text-indigo-700 " size={70} />
                    </div>
                    <p>{`${fullName.toUpperCase()}`}'S </p>
                </Link>
            </div>
            <div className="text-l mb-4 py-2 hover:bg-slate-50">
                <Link to="/transfer">
                    <div className="px-7">
                        <CashStack className="text-indigo-700 " size={70} />
                    </div>
                    <p className="py-1 pl-7 text-l">Transfer</p>
                </Link>
            </div>
            <div className="text-l mb-4 py-2 hover:bg-slate-50">
                <Link to="/">
                    <div className="px-7">
                        <GraphUpArrow className="text-indigo-700 " size={60} />
                    </div>
                    <p className="py-1 pl-7 text-l">Statistics</p>
                </Link>
            </div>


        </div>
    )

}


export default SideBar;