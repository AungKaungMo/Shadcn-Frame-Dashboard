import {axios} from "@/service/axios";
import { LocationResponse, CreateLocationType, UpdateLocationType, LocationDetailType } from "@/types";

export const getLocations = async (): Promise<LocationResponse> => {
    try {
        const response = await axios.get<LocationResponse>('/admin/v1/locations?key=not_tree');
        if (!response) {
            throw new Error('Location data not found');
        }
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const createLocation = async (
    payload: CreateLocationType
) => {
    try {
        const response = await axios.post('/admin/v1/locations', payload);
        return response
    } catch (error) {
        console.log(error)
    }
}

export const LocationDetailById = async (id: number): Promise<LocationDetailType> => {
    try {
        const response = await axios.get('/admin/v1/locations/' + id);
        const data = response?.data as LocationDetailType;

        if (!data) {
            throw new Error('Location data not found');
        }

        return data;
    } catch (error) {
        throw error;
    }
};

export const updateLocation = async (
    payload: UpdateLocationType,
) => {
    try {
        const { id, ...data} = payload
        const response = await axios.put('/admin/v1/locations/' + id, data);
        return response
    } catch (error) {
        throw error;
    }
}