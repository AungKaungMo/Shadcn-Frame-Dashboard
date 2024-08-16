import { LocationDetailType, LocationResponse, UpdateLocationType } from "@/types";
import { createLocation, getLocations, LocationDetailById, updateLocation } from "../axios-call/LocationAxios";
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

export const useAllLocations = (): UseQueryResult<LocationResponse, Error> => {
    return useQuery<LocationResponse, Error>({
        queryKey: ['locations'],
        queryFn: getLocations,
    });
}

export const useCreateLocation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['locations'],
        mutationFn: createLocation,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['locations']});
        },
    })
}

export const useDetailLocation = (id:number) => {
    return useQuery<LocationDetailType>({
        queryKey: ['locations', id],
        queryFn: () => LocationDetailById(id)
    })
}

export const useUpdateLocation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['locations', 'id'],
        mutationFn: (payload: UpdateLocationType) => updateLocation(payload), 
        onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ['locations']});
        },
    })
}