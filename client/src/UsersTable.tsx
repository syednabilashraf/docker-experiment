//import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import {EditIcon} from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { Modal } from '@mui/material';
import EditUser from './EditUser';
import DeleteUser from './DeleteUser';
import { User, Users } from './types/homepage';

function createData(
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: number,
) {
    return { firstName, lastName, email, mobileNumber };
}

const rows = [
    createData('nabil', 'ashraf', 'nabil@gmail.com', 123456),
    createData('nabil', 'ashraf', 'nabil@gmail.com', 123456),
    createData('nabil', 'ashraf', 'nabil@gmail.com', 123456),
    createData('nabil', 'ashraf', 'nabil@gmail.com', 123456)
];

export default function UsersTable({ }) {
    const [openEditUserModal, setOpenEditUserModal] = useState(false);
    const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);

    const [selectedUser, setSelectedUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: 0
    })

    const handleOpenEditUserModal = (user: User) => (e: any) => {
        setOpenEditUserModal(true);
        setSelectedUser(user)
    }

    const handleCloseEditUserModal = (e: any) => {
        setOpenEditUserModal(false);
    }
    const handleOpenDeleteUserModal = (user: User) => (e: any) => {
        setOpenDeleteUserModal(true);
        setSelectedUser(user)
    }

    const handleCloseDeleteUserModal = (e: any) => {
        setOpenDeleteUserModal(false);
    }


    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First name</TableCell>
                            <TableCell align="right">Last name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Mobile number</TableCell>
                            <TableCell align="right">Edit/Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.firstName}
                                </TableCell>
                                <TableCell align="right">{row.lastName}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.mobileNumber}</TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={handleOpenEditUserModal(row)}><EditIcon /></IconButton>
                                    <IconButton onClick={handleOpenDeleteUserModal(row)} ><DeleteIcon /></IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                open={openEditUserModal}
                onClose={handleCloseEditUserModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <EditUser user={selectedUser} handleCloseEditUserModal={handleCloseEditUserModal} />
            </Modal>
            <Modal
                open={openDeleteUserModal}
                onClose={handleCloseDeleteUserModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DeleteUser user={selectedUser} handleCloseDeleteUserModal={handleCloseDeleteUserModal} />
            </Modal>

        </>
    );
}