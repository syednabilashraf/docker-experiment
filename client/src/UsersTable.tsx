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

export default function UsersTable({ users, setUsers }: { users: Users | [], setUsers: any }) {
    console.log('table', users)
    const [openEditUserModal, setOpenEditUserModal] = useState(false);
    const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);
    const [selectedUserIndex, setSelectedUserIndex] = useState(0)

    const handleOpenEditUserModal = (index: number) => (e: any) => {
        setOpenEditUserModal(true);
        setSelectedUserIndex(index)
    }

    const handleCloseEditUserModal = (e: any) => {
        setOpenEditUserModal(false);
    }
    const handleOpenDeleteUserModal = (index: number) => (e: any) => {
        setOpenDeleteUserModal(true);
        setSelectedUserIndex(index)
    }

    const handleCloseDeleteUserModal = (e: any) => {
        setOpenDeleteUserModal(false);
    }

    const handleEditUser = (userIndex: number, user: User) => {
        const newUsers = [...users];
        newUsers[userIndex] = user;
        setUsers(newUsers)
    }

    const handleDeleteUser = (userIndex: number) => {
        const newUsers = [...users];
        newUsers.splice(userIndex, 1);
        setUsers(newUsers);
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
                        {users.map((user, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {user.firstName}
                                </TableCell>
                                <TableCell align="right">{user.lastName}</TableCell>
                                <TableCell align="right">{user.email}</TableCell>
                                <TableCell align="right">{user.mobileNumber}</TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={handleOpenEditUserModal(index)}><EditIcon /></IconButton>
                                    <IconButton onClick={handleOpenDeleteUserModal(index)} ><DeleteIcon /></IconButton>
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
                <EditUser
                    user={users[selectedUserIndex]}
                    selectedUserIndex={selectedUserIndex}
                    handleCloseEditUserModal={handleCloseEditUserModal}
                    handleEditUser={handleEditUser}
                />
            </Modal>
            <Modal
                open={openDeleteUserModal}
                onClose={handleCloseDeleteUserModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DeleteUser
                    user = {users[selectedUserIndex]}
                    selectedUserIndex={selectedUserIndex}
                    handleDeleteUser={handleDeleteUser}
                    handleCloseDeleteUserModal={handleCloseDeleteUserModal}
                />
            </Modal>

        </>
    );
}