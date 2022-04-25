import { EditUserProp, User } from "./types/homepage"
import { CardHeader, makeStyles, TextField, Typography } from "@mui/material"
import { Button, Paper, Card } from "@mui/material"
import './App.css';
import { useState } from "react";
import { patchUser } from "./service";

export default function EditUser({ user, selectedUserIndex, handleCloseEditUserModal, handleEditUser }: any) {
    const [editedUser, setEditedUser] = useState(user);

    const handleInputChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(editedUser)
        setEditedUser({
            ...editedUser,
            [name]: value
        })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        patchUser(editedUser, editedUser._id).then(
            (res) => {
                console.log('ressy', res)
                handleEditUser(selectedUserIndex, editedUser);
                handleCloseEditUserModal()
            }
        ).catch(err => console.log('err', err))
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <Card className="editUserForm">
                <Typography variant="h4">Edit User</Typography>
                <TextField
                    required
                    id="outlined-required"
                    label="First name"
                    defaultValue={user.firstName}
                    className="textField"
                    name="firstName"
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Last name"
                    defaultValue={user.lastName}
                    className="textField"
                    name="lastName"
                    onChange={handleInputChange}

                />
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue={user.email}
                    className="textField"
                    name="email"
                    onChange={handleInputChange}


                />
                <TextField
                    required
                    id="outlined-required"
                    label="Mobile number"
                    defaultValue={user.mobileNumber}
                    className="textField"
                    name="mobileNumber"
                    type="number"
                    onChange={handleInputChange}
                />
                <div>
                    <Button onClick={handleCloseEditUserModal}>Cancel</Button>
                    <Button type="submit">Submit</Button>
                </div>
            </Card >
        </form>
    )
}
