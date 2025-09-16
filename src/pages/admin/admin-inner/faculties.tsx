import { useEffect } from "react";
import {
  Table,
  Group,
  Title,
  Loader,
  Center,
  Stack,
} from "@mantine/core";
import { useFacultiesStore } from "../../../store/useFacultyStore";
import { ConfirmDeleteModal } from "../../../shared/ui/confirmDelete";
import { FacultyModal } from "./components/faculties/addedit";
export const FacultiesPage = () => {
  const { faculties, fetchFaculties, loading , deleteFaculty} = useFacultiesStore();


  useEffect(() => {
    fetchFaculties(); 
  }, [fetchFaculties]);



  if (loading) {
    return (
      <Center mt={50}>
        <Loader size="lg" />
      </Center>
    );
  }

  return (
    <Stack m="auto" mt={10}>
      <Group mb="lg">
        <Title order={2}>Факультеты</Title>
        <FacultyModal />
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
                  <FacultyModal facultyId={faculty.id} />
                  <ConfirmDeleteModal onConfirm={() => {deleteFaculty(faculty.id)}} />
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

    </Stack>
  );
};
