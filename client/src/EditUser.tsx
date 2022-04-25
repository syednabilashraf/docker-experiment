import { EditUserProp, User } from "./types/homepage"
import { CardHeader, makeStyles, TextField, Typography } from "@mui/material"
import { Button, Paper, Card } from "@mui/material"
import './App.css';


export default function EditUser({ user, handleCloseEditUserModal }: EditUserProp) {
    return (
        <form className="form">
            <Card className="editUserForm">
                <Typography variant="h4">Edit User</Typography>
                <TextField
                    required
                    id="outlined-required"
                    label="First name"
                    defaultValue="Hello World"
                    className="textField"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Last name"
                    defaultValue="Hello World"
                    className="textField"

                />
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue="Hello World"
                    className="textField"

                />
                <TextField
                    required
                    id="outlined-required"
                    label="Mobile number"
                    defaultValue="Hello World"
                    className="textField"

                />
                <Button onClick={handleCloseEditUserModal}>Cancel</Button>
                <Button>Submit</Button>
            </Card >
        </form>
    )
}