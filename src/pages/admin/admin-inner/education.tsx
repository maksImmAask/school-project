import { useEffect } from "react";
import { Group, Stack, Table, Title } from "@mantine/core";
import { useEducationStore } from "../../../store/useEducationStore";
import { ConfirmDeleteModal } from "../../../shared/ui/confirmDelete";
import { EducationModal } from "./components/education/addedit";

export const Education = () => {
  const { educations, fetchEducations,deleteEducation} = useEducationStore();




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
          <EducationModal educationId={education.id} />
          <ConfirmDeleteModal onConfirm={() => {deleteEducation(education.id)}} />
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack m="auto" mt={10}>
      <Group justify="space-between" mb="md">
        <Title order={2}>Обучения</Title>
        <EducationModal />
      </Group>

      <Table>
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


    </Stack>
  );
};
