import axios from "axios";



export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api"
})

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export default fetcher;
