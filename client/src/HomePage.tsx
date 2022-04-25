import { Button, Modal } from '@mui/material';
import UsersTable from './UsersTable';
import CreateUser from './CreateUser';
import { useState } from 'react';


export default function HomePage() {
  const [openCreateUserModal, setOpenCreateUserModal] = useState(false);
  const handleOpenCreateUserModal = (e: any) => {
    setOpenCreateUserModal(true);
  }

  const handleCloseCreateUserModal = (e: any) => {
    setOpenCreateUserModal(false);
  }

  return (
    <>
      <UsersTable />
      <Button variant = "contained" onClick={handleOpenCreateUserModal}>Create User</Button>
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