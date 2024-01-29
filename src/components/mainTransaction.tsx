import SideBar from "./sidebar";
import Transaction from "./transaction";


function MainTransaction(props :any) {
    return (
        <>
            <div className="flex py-20">
                <SideBar fullName={props.username} />
                <Transaction top={0} />

            </div>
        </>
    )
}

export default MainTransaction;