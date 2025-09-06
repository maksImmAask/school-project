import { useEffect, useState } from "react";
import {
  Table,
  Button,
  Group,
  Title,
  Loader,
  Center,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { useFacultiesStore } from "../../../store/useFacultyStore";
import { CreateFacultyModal } from "./components/faculties/CreateFacultyModal";
import { UpdateFacultyModal } from "./components/faculties/UpdateFacultyStore";

export const FacultiesPage = () => {
  const { faculties, fetchFaculties, loading, deleteFaculty } = useFacultiesStore();

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedFacultyId, setSelectedFacultyId] = useState<string | null>(null);

  useEffect(() => {
    fetchFaculties(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEdit = (id: string) => {
    setSelectedFacultyId(id);
    setUpdateModalOpen(true);
  };

  const handleDelete = (id: string, title: string) => {
    modals.openConfirmModal({
      title: "Удалить факультет?",
      centered: true,
      children: (
        <p>
          Вы действительно хотите удалить факультет <strong>{title}</strong>?
        </p>
      ),
      labels: { confirm: "Удалить", cancel: "Отмена" },
      confirmProps: { color: "red" },
      onConfirm: () => deleteFaculty(id),
    });
  };

  if (loading) {
    return (
      <Center mt={50}>
        <Loader size="lg" />
      </Center>
    );
  }

  return (
    <div>
      <Group mb="lg">
        <Title order={2}>Факультеты</Title>
        <Button onClick={() => setCreateModalOpen(true)}>Добавить факультет</Button>
      </Group>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Название</Table.Th>
            <Table.Th>Описание</Table.Th>
            <Table.Th>Действия</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {faculties.length > 0 ? (
            faculties.map((faculty, index) => (
              <Table.Tr key={faculty.id}>
                <Table.Td>{index + 1}</Table.Td>
                <Table.Td>{faculty.title}</Table.Td>
                <Table.Td>{faculty.desc}</Table.Td>
                <Table.Td>
                  <Button
                    size="xs"
                    mr="xs"
                      onClick={() => handleEdit(faculty.id)}
                  >
                    Update
                  </Button>

                  <Button
                    variant="outline"
                    size="xs"
                      onClick={() => handleDelete(faculty.id, faculty.title)}
                  >
                    Delete
                  </Button>
                </Table.Td>
              </Table.Tr>
            ))
          ) : (
            <Table.Tr>
              <Table.Td colSpan={4} style={{ textAlign: "center" }}>
                Нет данных
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>

      <CreateFacultyModal
        opened={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
      />

      {selectedFacultyId && (
        <UpdateFacultyModal
          opened={updateModalOpen}
          onClose={() => setUpdateModalOpen(false)}
          facultyId={selectedFacultyId}
        />
      )}
    </div>
  );
};
