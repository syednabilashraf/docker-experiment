import { FunctionBody } from "typescript"

export type EditUserProp = {
    user: User,
    handleCloseEditUserModal: any
}

export type DeleteUserProp = {
    user: User,
    handleCloseDeleteUserModal: any
}

export type CreateUserProp = {
    handleCloseCreateUserModal: any
}

export type User = {
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: number
}


export type Users = [User]
