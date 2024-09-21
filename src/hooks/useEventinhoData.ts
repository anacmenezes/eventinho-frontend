import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { EventinhoData } from '../interface/EventinhoData';

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<EventinhoData[]> => {
    const response = axios.get(API_URL + '/eventinho');
    return response;
}

export function useEventinhoData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ["eventinho-data"],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}