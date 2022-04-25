import { Button, Modal } from '@mui/material';
import UsersTable from './UsersTable';
import CreateUser from './CreateUser';
import { useState, useEffect } from 'react';
import axios from 'axios';
console.log("papiam")
export default function HomePage() {
  const [openCreateUserModal, setOpenCreateUserModal] = useState(false);
  const [users, setUsers] = useState([])
  useEffect(() => {
    console.log("hello")
    const getUsers = async () => {
      const result = await axios.get('http://naruhodo_server:3001/api/users');
      console.log(result)
      console.log(result)
      console.log(result)

    }
    getUsers()
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
      <Button variant="contained" onClick={handleOpenCreateUserModal}>Create User</Button>
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