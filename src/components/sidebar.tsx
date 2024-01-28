import avatar from "../assets/avatar.png"
import transfer from "../assets/money-transfer (1).png"

function SideBar({ fullName }: any) {

    return (
        <div className=" h-screen  p-6">

            <div className="text-l mb-4  hover:bg-slate-50">
                <img src={avatar} className="h-20 pl-5" alt="" />
                <p>{`${fullName.toUpperCase()}`}'S </p>
            </div>
            <ul>
                <li className="py-4">
                    <div className="py-2 hover:bg-slate-50 ">
                        <img src={transfer} className="h-20" alt="bank" />
                        <p className="py-1 pl-2 text-l">Transfer</p>
                    </div>
                </li>
                <li className="py-2 hover:bg-gray-700">Statistics</li>
            </ul>
        </div>
    )

}


export default SideBar;