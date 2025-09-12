import { Button, Flex, Table , Text} from "@mantine/core"
import { useUsersStore } from "../../../store/useUserStore"
import { ConfirmDeleteModal } from "./components/users/deleteUser"
import { useState, useEffect } from "react";
import { EditUserModal } from "./components/users/editUser";
import { AddUserModal } from "./components/users/addUser";
export const Users = () => {
  const [openedId, setOpenedId] = useState<string | null>(null);
  const [openedEditId, setOpenedEditId] = useState<string | null>(null);
  const [openedAdd, setOpenedAdd] = useState(false);
  const { users, fetchUsers } = useUsersStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  const handleOpen = (id: string) => {setOpenedId(id); console.log('hello')};
  const handleClose = () => setOpenedId(null);

  const handleOpenEdit = (id: string) => setOpenedEditId(id);
  const handleCloseEdit = () => setOpenedEditId(null);
  const items = users.map((user, index) => (
    <Table.Tr key={user.id}>
      <Table.Td>{index}</Table.Td>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>{user.password}</Table.Td>
      <Table.Td>{user.age}</Table.Td>
      <Table.Td>{user.phone}</Table.Td>
      <Table.Td>{user.role}</Table.Td>
      <Table.Td>
        <Flex gap={'xs'}>
        <Button onClick={()=>{handleOpenEdit(user.id)}} disabled={user.role==='admin' ? true : false}>Update</Button>
        <Button variant="outline" onClick={()=> {handleOpen(user.id)}} disabled={user.role==='admin' ? true : false}>Delete</Button>
        </Flex>

        <EditUserModal
          opened={openedEditId === user.id}
          onClose={handleCloseEdit}
          userId={user.id}
        />
        <ConfirmDeleteModal
          opened={openedId === user.id} 
          onClose={handleClose}
          userId={user.id}
          userName={user.name}
        />
      </Table.Td>
    </Table.Tr>

  ))
  return (
    <>
    <Flex justify="space-between" mb="md">
      <Text size="30px" fw={700}>Список пользователей</Text>
      <Button onClick={() => setOpenedAdd(true)}>Добавить пользователя</Button>
    </Flex>
    
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>ID</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th>Password</Table.Th>
          <Table.Th>Age</Table.Th>
          <Table.Th>Phone</Table.Th>
          <Table.Th>Role</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{items}</Table.Tbody>
    </Table>
    <AddUserModal opened={openedAdd} onClose={() => setOpenedAdd(false)} />


    </>
  )
}