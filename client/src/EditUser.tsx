import { User } from "./types/homepage"
import { TextField } from "@mui/material"
import { Button } from "@mui/material"

export default function EditUser({ user }) {
    return (
        <form>
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
            />
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
            />
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
            />
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
            />
            <Button>Cancel</Button>
            <Button>Submit</Button>
        </form>
    )
}