import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../services/fetcher";


function Logout() {
    const navigate = useNavigate()

    async function handleLogout() {
        await axiosInstance.post("/logout", "", {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        navigate("/login")
    }



    return (
        <>
            <h1>You are currently logged out of the app</h1>
        </>
    )
}

export default Logout;
