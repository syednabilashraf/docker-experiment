import axios from "./axios"
import { User } from "./types/homepage";
export const getUsers = async () => {
    const users = await axios.get('/api/users')
    return users;
}
export const createUser = async (user: User) => {
    const response: User = await axios.post('/api/users', user);
    return response
}

export const patchUser = async (user: User, id: string) => {
    const response = await axios.patch(`/api/users/${id}`, user);
    return response;
}

export const removeUser = async (id: string) => {
    const response = await axios.delete(`/api/users/${id}`);
    return response;
}