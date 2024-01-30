import { PersonFillSlash } from "react-bootstrap-icons";


function ErrorPage(props: any) {

    return (
        <div className="relative h-screen top-20">
            
            <div className="absolute left-[30%] p-5  top-[20%] flex flex-col justify-center items-center ">
                <div className="text">
                    < PersonFillSlash size={150} color="white" />
                </div>
                <div>
                    <p className="font-bold text-5xl ">{props.message}</p>
                </div>
            </div>
        </div>
    )


}

export default ErrorPage;

