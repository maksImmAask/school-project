import { Button, Flex, Table, Text , Modal, Image, Stack} from "@mantine/core";
import { useTeachersStore } from "../../../store/useTeachersStore";
import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { AddTeacherModal } from "./components/teachers/AddTeacherModal";
import { EditTeacherModal } from "./components/teachers/EditTeacher";
import { ConfirmDeleteModal } from "../../../shared/ui/confirmDelete";

export const Teachers = () => {
  const [openedAvatarId, setOpenedAvatarId] = useState<string | null>(null); 
  const { teachers, fetchTeachers , deleteTeacher} = useTeachersStore();
  const [openedEdit, { open: openEdit, close: closeEdit }] = useDisclosure(false);

  const [selectedTeacherId, setSelectedTeacherId] = useState<string | null>(null);
  const handleOpenAvatar = (id: string) => setOpenedAvatarId(id);
  const handleCloseAvatar = () => setOpenedAvatarId(null);
  const [opened, { open, close }] = useDisclosure(false);
  console.log(teachers);

  const handleOpenEdit = (id: string) => {
    setSelectedTeacherId(id);
    openEdit();
  };

  useEffect(() => {
    fetchTeachers();
  }, [fetchTeachers]);
  const items = teachers.map((teacher, index) => {

    const isAvatarOpen = openedAvatarId === teacher.id;
    return (
    <Table.Tr key={teacher.id}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{teacher.firstName}</Table.Td>
      <Table.Td>{teacher.lastName}</Table.Td>
      <Table.Td>{teacher.subject}</Table.Td>
      <Table.Td>
        <Flex gap="xs">
          <Button variant="light" onClick={() => handleOpenAvatar(teacher.id)}>
            View Avatar
          </Button>
                  <Button
                    variant="light"
                    size="xs"
                    onClick={() => handleOpenEdit(teacher.id)}
                  >
                    Редактировать
                  </Button>
                  <ConfirmDeleteModal 
                  onConfirm={() => {deleteTeacher(teacher.id)}}
                   />
          <Modal
            opened={isAvatarOpen}
            onClose={handleCloseAvatar}
            title={`${teacher.firstName} ${teacher.lastName} — Фото`}
            centered
            size="lg"
          >
            <Image
              src={teacher.avatar}
              alt={`${teacher.firstName} ${teacher.lastName}`}
              fit="contain"
              radius="md"
              style={{ maxHeight: "70vh" }}
            />
          </Modal>
        </Flex>

      <EditTeacherModal
        opened={openedEdit}
        onClose={closeEdit}
        teacherId={selectedTeacherId}
      />
      </Table.Td>
    </Table.Tr>
    )
  });

  return (
    <Stack m="auto" mt={10}>
      <Flex justify="space-between" mb="md">
        <Text size="30px" fw={700}>
          Список учителей
        </Text>
        <Button onClick={open}>Добавить учителя</Button>
      <AddTeacherModal opened={opened} onClose={close} />
      </Flex>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>First Name</Table.Th>
            <Table.Th>Last Name</Table.Th>
            <Table.Th>Subject</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{items}</Table.Tbody>
      </Table>
    </Stack>
  );
};
