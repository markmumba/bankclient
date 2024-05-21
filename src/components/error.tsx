import { PersonFillSlash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function ErrorPage(props: any) {
    return (
        <div className="flex h-screen items-center justify-center"> {/* Center the entire content */}
            <div className="p-5 text-center"> {/* Add padding and center text */}
                <PersonFillSlash size={100} color="white" className="mx-auto" /> {/* Center the icon, adjust size */}
                <p className="mt-4 font-bold text-3xl md:text-5xl">
                    {props.message}
                </p> {/* Adjust text size for smaller screens */}
                <button className="mt-8 bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-violet-700 md:px-8 md:py-3">
                    <Link to="/">
                        Go to homepage
                    </Link>
                </button> {/* Adjust padding for smaller screens */}
            </div>
        </div>
    );
}

export default ErrorPage;

