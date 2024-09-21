import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { EventinhoData } from '../interface/EventinhoData';

const API_URL = 'http://localhost:8080';

const postData = async (data: EventinhoData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/eventinho', data);
    return response;
}

export function useEventinhoDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["eventinho-data"]
              });
        }
    })

    return mutate;
}