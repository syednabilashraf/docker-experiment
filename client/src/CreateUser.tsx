import { CreateUserProp, User } from "./types/homepage"
import { CardHeader, makeStyles, TextField, Typography } from "@mui/material"
import { Button, Paper, Card } from "@mui/material"
import './App.css';
import { useState } from "react";
import { createUser } from "./service";

export default function CreateUser({ handleCloseCreateUserModal, handleCreateUser }: any) {
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: 0
    })

    const handleInputChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewUser({
            ...newUser,
            [name]: value
        })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        createUser(newUser).then(
            (res) => {
                console.log('ressy', res)
                handleCreateUser(newUser);
                handleCloseCreateUserModal()
            }
        ).catch(err => console.log('err', err))
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <Card className="editUserForm">
                <Typography variant="h4">Create User</Typography>
                <TextField
                    required
                    id="outlined-required"
                    label="First name"
                    className="textField"
                    name="firstName"
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Last name"
                    className="textField"
                    name="lastName"
                    onChange={handleInputChange}

                />
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    className="textField"
                    name="email"
                    onChange={handleInputChange}


                />
                <TextField
                    required
                    id="outlined-required"
                    label="Mobile number"
                    className="textField"
                    name="mobileNumber"
                    type="number"
                    onChange={handleInputChange}
                />
                <Button onClick={handleCloseCreateUserModal}>Cancel</Button>
                <Button type = "submit">Submit</Button>
            </Card >
        </form>
    )
}