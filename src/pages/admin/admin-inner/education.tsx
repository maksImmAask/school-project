import { useEffect, useState } from "react";
import { Button, Group, Stack, Table, Title } from "@mantine/core";
import { useEducationStore } from "../../../store/useEducationStore";
import { CreateEducationModal } from "./components/education/CreateEducationModal";
import { EditEducationModal } from "./components/education/EditEducationModal";
import { ConfirmDeleteModal } from "./components/education/ConfirmDeleteModal";

export const Education = () => {
  const { educations, fetchEducations,} = useEducationStore();

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpened, setDeleteModalOpened] = useState(false);
  const [selectedEducationId, setSelectedEducationId] = useState<string | null>(null);



  useEffect(() => {
    fetchEducations();
  }, [fetchEducations]);


  const rows = educations.map((education) => (
    <Table.Tr key={education.id}>
      <Table.Td>{education.title}</Table.Td>
      <Table.Td>{education.desc}</Table.Td>
      <Table.Td>{education.date}</Table.Td>
      <Table.Td>{education.startTime}</Table.Td>
      <Table.Td>{education.endTime}</Table.Td>
      <Table.Td>
        <Group>
          <Button
            size="xs"
            onClick={() => {
              setSelectedEducationId(education.id);
              setEditModalOpen(true);
            }}
          >
            Редактировать
          </Button>
          <Button
            color="red"
            size="xs"
            onClick={() => {
              setSelectedEducationId(education.id);
              setDeleteModalOpened(true);
            }}
          >
            Delete
          </Button>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack w={1000} m="auto" mt={10}>
      <Group justify="space-between" mb="md">
        <Title order={2}>Обучения</Title>
        <Button onClick={() => setCreateModalOpen(true)}>Добавить обучение</Button>
      </Group>

      <Table striped highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Название</Table.Th>
            <Table.Th>Описание</Table.Th>
            <Table.Th>Дата</Table.Th>
            <Table.Th>Начало</Table.Th>
            <Table.Th>Окончание</Table.Th>
            <Table.Th>Действия</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      {/* Модалки */}
      <CreateEducationModal
        opened={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
      />

      <EditEducationModal
        opened={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        educationId={selectedEducationId}
      />

      {selectedEducationId && (
        <ConfirmDeleteModal
          opened={deleteModalOpened}
          onClose={() => setDeleteModalOpened(false)}
          educationId={selectedEducationId}
        />
      )}
    </Stack>
  );
};
