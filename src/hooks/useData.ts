import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


 

interface FetchResponse<T> {
    count: number,
    results : T[]

}
  const useData = <T>(endPoint : string ,requestConfig?: AxiosRequestConfig , deps?:any )=>{
    const [data, useData] = useState<T[]>([]);
    const [error, setError] = useState ("");
    const [isLoading , setLoding] = useState(false);
 
    useEffect(()=>{
    const controller = new AbortController();
    setLoding(true);
     apiClient.get<FetchResponse<T>>(endPoint , {signal: controller.signal, ...requestConfig} )
    .then(res=> {
        useData(res.data.results);
        setLoding(false)        
    })
    .catch(err=>
       { if(err instanceof CanceledError) return;
        setError(err.message);
         setLoding(false)})        
    return ()=> controller.abort();
},deps?[...deps]: []) 

return {data ,error ,isLoading}
}


export default useData;

  