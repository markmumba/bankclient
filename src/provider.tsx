import { ReactNode } from "react";
import { SWRConfig } from "swr";
import fetcher from "./services/fetcher";


function Provider({ children }: { children: ReactNode }) {
    return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>

}
export default Provider;