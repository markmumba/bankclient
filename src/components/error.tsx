import image from "../assets/8292061.jpg";
import { PersonFillSlash } from "react-bootstrap-icons";


function ErrorPage(props: any) {

    return (
        <div className="relative h-screen top-20">
            <img src={image} className="object-cover w-full h-full " alt="bank image" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <div className="absolute left-[30%] p-5  top-[20%] flex flex-col justify-center items-center ">
                <div className="text">
                    < PersonFillSlash size={150} color="white" />
                </div>
                <div>
                    <p className="font-bold text-5xl  text-white">{props.message}</p>
                </div>
            </div>
        </div>
    )


}

export default ErrorPage;

