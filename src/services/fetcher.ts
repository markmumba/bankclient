import axios from "axios";



export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL|| "http://localhost:8080/api/",
})

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export default fetcher;
