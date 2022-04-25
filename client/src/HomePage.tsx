import { Button, Modal } from '@mui/material';
import UsersTable from './UsersTable';
import CreateUser from './CreateUser';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getUsers } from './service';
import { Users, User } from './types/homepage';
import './App.css'

export default function HomePage() {
  const [openCreateUserModal, setOpenCreateUserModal] = useState(false);
  const [users, setUsers] = useState<any>([])
  useEffect(() => {
    getUsers().then((res) => {
      console.log(res)
      setUsers(res)
    }).catch(err => console.log(err))
  }, [])
  const handleOpenCreateUserModal = (e: any) => {
    setOpenCreateUserModal(true);
  }

  const handleCloseCreateUserModal = (e: any) => {
    setOpenCreateUserModal(false);
  }

  const handleCreateUser = (user: any) => {
    const newUsers: any = [...users];
    newUsers.push(user)
    setUsers(newUsers);
  }

  return (
    <>
      <div className='homePage'>
        <UsersTable users={users} setUsers={setUsers} />
        <Button variant="contained" onClick={handleOpenCreateUserModal} className='createButton'>Create User</Button>
      </div>

      <Modal
        open={openCreateUserModal}
        onClose={handleCloseCreateUserModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CreateUser
          handleCloseCreateUserModal={handleCloseCreateUserModal}
          handleCreateUser={handleCreateUser}
        />
      </Modal>
    </>
  );
}