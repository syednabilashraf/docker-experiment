import { DeleteUserProp, User } from "./types/homepage"
import { CardHeader, makeStyles, TextField, Typography } from "@mui/material"
import { Button, Paper, Card } from "@mui/material"
import './App.css';
import { removeUser } from "./service";

export default function DeleteUser({ user, selectedUserIndex, handleCloseDeleteUserModal, handleDeleteUser }: any) {
    const handleDelete = (e: any) => {
        removeUser(user._id).then(res => {
            handleDeleteUser(selectedUserIndex)
            handleCloseDeleteUserModal()
        }).catch(err => console.log(err))
    }
    return (
        <div className="deleteUserForm">
            <Card className="deleteCard">
                <Typography variant="h4">Are you sure?</Typography>
                <div>
                    <Button onClick={handleCloseDeleteUserModal}>Cancel</Button>
                    <Button onClick={handleDelete}>Confirm</Button>
                </div>
            </Card >
        </div>
    )
}