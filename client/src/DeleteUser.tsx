import { DeleteUserProp, User } from "./types/homepage"
import { CardHeader, makeStyles, TextField, Typography } from "@mui/material"
import { Button, Paper, Card } from "@mui/material"
import './App.css';


export default function DeleteUser({ user, handleCloseDeleteUserModal }: DeleteUserProp) {
    return (
        <div className="deleteUserForm">
            <Card className="deleteCard">
                <Typography>Are you sure?</Typography>
                <div>
                    <Button onClick={handleCloseDeleteUserModal}>Cancel</Button>
                    <Button>Confirm</Button>
                </div>
            </Card >
        </div>
    )
}