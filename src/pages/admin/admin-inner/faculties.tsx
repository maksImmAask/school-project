import { useEffect, useState } from "react";
import {
  Table,
  Button,
  Group,
  Title,
  Loader,
  Center,
} from "@mantine/core";
import { useFacultiesStore } from "../../../store/useFacultyStore";
import { CreateFacultyModal } from "./components/faculties/CreateFacultyModal";
import { UpdateFacultyModal } from "./components/faculties/UpdateFacultyStore";
import { ConfirmDeleteModal } from "./components/faculties/DeleteModal";

export const FacultiesPage = () => {
  const { faculties, fetchFaculties, loading } = useFacultiesStore();

  const [opened, setOpened] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);  
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const [selectedFaculty, setSelectedFaculty] = useState<{
    id: string;
    title: string;
  } | null>(null);

  const [selectedFacultyId, setSelectedFacultyId] = useState<string | null>(null);

  useEffect(() => {
    fetchFaculties(); 
  }, [fetchFaculties]);

  const handleEdit = (id: string) => {
    setSelectedFacultyId(id);
    setUpdateModalOpen(true);
  };

  const openDeleteModal = (faculty: { id: string; title: string }) => {
    setSelectedFaculty(faculty);
    setOpened(true);
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
                <Table.Td>{faculty.name}</Table.Td>
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
                    onClick={() =>
                      openDeleteModal({ id: faculty.id, title: faculty.name })
                    }
                  >
                    Удалить
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
      {selectedFaculty && (
        <ConfirmDeleteModal
          opened={opened}
          onClose={() => setOpened(false)}
          facultyId={selectedFaculty.id}
          facultyTitle={selectedFaculty.title}
        />
      )}
    </div>
  );
};
