import { Button, Flex, Table, Text, Modal, Image, Stack } from "@mantine/core";
import { useTeachersStore } from "../../../store/useTeachersStore";
import { useEffect, useState } from "react";
import { TeacherModal } from "./components/teachers/addedit";
import { ConfirmDeleteModal } from "../../../shared/ui/confirmDelete";
import { useTranslation } from "react-i18next";

export const Teachers = () => {
  const { i18n } = useTranslation(); 
  const [openedAvatarId, setOpenedAvatarId] = useState<string | null>(null);
  const { teachers, fetchTeachers, deleteTeacher } = useTeachersStore();

  const handleOpenAvatar = (id: string) => setOpenedAvatarId(id);
  const handleCloseAvatar = () => setOpenedAvatarId(null);

  useEffect(() => {
    fetchTeachers();
  }, [fetchTeachers]);

  const rows = teachers.map((teacher, index) => {
    const isAvatarOpen = openedAvatarId === teacher.id;

    return (
      <Table.Tr key={teacher.id}>
        <Table.Td>{index + 1}</Table.Td>

        <Table.Td>{teacher.firstName[i18n.language as "ru" | "en" | "uz"]}</Table.Td>

        <Table.Td>{teacher.lastName[i18n.language as "ru" | "en" | "uz"]}</Table.Td>

        <Table.Td>{teacher.subject[i18n.language as "ru" | "en" | "uz"]}</Table.Td>

        <Table.Td>
          <Flex gap="xs">
            <Button variant="light" onClick={() => handleOpenAvatar(teacher.id)}>
              View Avatar
            </Button>

            <TeacherModal teacherId={teacher.id} />

            <ConfirmDeleteModal onConfirm={() => deleteTeacher(teacher.id)} />

            <Modal
              opened={isAvatarOpen}
              onClose={handleCloseAvatar}
              title={`${teacher.firstName[i18n.language as "ru" | "en" | "uz"]} ${
                teacher.lastName[i18n.language as "ru" | "en" | "uz"]
              } — Фото`}
              centered
              size="lg"
            >
              <Image
                src={teacher.avatar}
                alt={`${teacher.firstName[i18n.language as "ru" | "en" | "uz"]} ${
                  teacher.lastName[i18n.language as "ru" | "en" | "uz"]
                }`}
                fit="contain"
                radius="md"
                style={{ maxHeight: "70vh" }}
              />
            </Modal>
          </Flex>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Stack m="auto" mt={10}>
      <Flex justify="space-between" mb="md">
        <Text size="30px" fw={700}>
          Список учителей
        </Text>
        <TeacherModal />
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
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Stack>
  );
};
