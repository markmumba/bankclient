import axios from "axios";



export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL|| "https://bankapp-production-7cd7.up.railway.app/api",
})

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export default fetcher;
