import { useEffect, useState } from "react";
import { Button, Flex, Stack, Table, Text } from "@mantine/core";
import { usePositionsStore } from "../../../store/usePositionStore";
import { AddPositionModal } from "./components/positions/AddPosition";
import { EditPositionModal  } from "./components/positions/EditPosition";
import { ConfirmDeleteModal } from "../../../shared/ui/confirmDelete";

export const PositionOptions = () => {
  const { positions, fetchPositions , deletePosition } = usePositionsStore();
  const [openedAdd, setOpenedAdd] = useState(false);
  const [openedEditId, setOpenedEditId] = useState<string | null>(null);

  useEffect(() => {
    fetchPositions();
  }, [fetchPositions]);

  const handleOpenEdit = (id: string) => setOpenedEditId(id);
  const handleCloseEdit = () => setOpenedEditId(null);


  return (
    <Stack m="auto" mt={10}>
      <Flex justify="space-between" mb="md">
        <Text size="30px" fw={700}>Список должностей</Text>
        <Button onClick={() => setOpenedAdd(true)}>Добавить должность</Button>
      </Flex>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Название</Table.Th>
            <Table.Th>Действия</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {positions.map((pos, index) => (
            <Table.Tr key={pos.id}>
              <Table.Td>{index + 1}</Table.Td>
              <Table.Td>{pos.title}</Table.Td>
              <Table.Td>
                <Flex gap="xs">
                  <Button variant="filled" onClick={() => handleOpenEdit(pos.id)}>
                    Редактировать
                  </Button>
                  <ConfirmDeleteModal onConfirm={() => {deletePosition(pos.id)}}/>
                </Flex>

                <EditPositionModal
                  opened={openedEditId === pos.id}
                  onClose={handleCloseEdit}
                  positionId={pos.id}
                />
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <AddPositionModal opened={openedAdd} onClose={() => setOpenedAdd(false)} />
    </Stack>
  );
};
