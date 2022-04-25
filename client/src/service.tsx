import axios from "./axios"
import { User, Users } from "./types/homepage";

export const getUsers = async (): Promise<Users> => {
    const response = await (await axios.get('/api/users')).data
    console.log("respon", response.data)
    return response;
}
export const createUser = async (user: User) => {
    const response: Users = await (await axios.post('/api/users', user)).data;
    return response
}

export const patchUser = async (user: User, id: string) => {

        const response: User = await axios.patch(`/api/users/${id}`, user)
        console.log('res', response)
        return response;
}

export const removeUser = async (id: string) => {
        const response: User = await (await axios.delete(`/api/users/${id}`)).data;
        return response;
}