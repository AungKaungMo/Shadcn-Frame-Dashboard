import { axios } from '@/service/axios'
import { LoginDataType } from '@/types'

export const signinAccount = async (
    user: LoginDataType,
) => {
    try {
        const response = await axios.post("/admin/v1/login", user);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};