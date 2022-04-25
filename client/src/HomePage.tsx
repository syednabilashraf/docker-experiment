import { Button, Modal } from '@mui/material';
import UsersTable from './UsersTable';
import CreateUser from './CreateUser';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getUsers } from './service';
import { Users } from './types/homepage';

export default function HomePage() {
  const [openCreateUserModal, setOpenCreateUserModal] = useState(false);
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers().then((res) => {
      console.log(res)
    })
  }, [])
  const handleOpenCreateUserModal = (e: any) => {
    setOpenCreateUserModal(true);
  }

  const handleCloseCreateUserModal = (e: any) => {
    setOpenCreateUserModal(false);
  }

  return (
    <>
      <UsersTable />
      <Button variant="contained" onClick={handleOpenCreateUserModal}>Create aUser</Button>
      <Modal
        open={openCreateUserModal}
        onClose={handleCloseCreateUserModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CreateUser handleCloseCreateUserModal={handleCloseCreateUserModal} />
      </Modal>
    </>
  );
}