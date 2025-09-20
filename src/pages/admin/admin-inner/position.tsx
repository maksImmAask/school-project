import { useEffect } from "react";
import { Flex, Stack, Table, Text } from "@mantine/core";
import { usePositionsStore } from "../../../store/usePositionStore";
import { ConfirmDeleteModal } from "../../../shared/ui/confirmDelete";
import { PositionModal } from "./components/positions/addedit";
import { useTranslation } from "react-i18next";

export const PositionOptions = () => {
  const { positions, loading, fetchPositions, deletePosition } = usePositionsStore();
  const { i18n } = useTranslation();

  useEffect(() => {
    fetchPositions();
  }, [fetchPositions]);

  const rows = positions.map((pos, index) => (
    <Table.Tr key={pos.id}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{pos.title[i18n.language as "ru" | "en" | "uz"]}</Table.Td>
      <Table.Td>
        <Flex gap="xs">
          <PositionModal positionId={pos.id} />
          <ConfirmDeleteModal onConfirm={() => deletePosition(pos.id)} />
        </Flex>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack m="auto" mt={10}>
      <Flex justify="space-between" mb="md">
        <Text size="30px" fw={700}>
          Список должностей
        </Text>
        <PositionModal />
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
          {loading ? (
            <Table.Tr>
              <Table.Td colSpan={3} style={{ textAlign: "center" }}>
                Загрузка...
              </Table.Td>
            </Table.Tr>
          ) : (
            rows
          )}
        </Table.Tbody>
      </Table>
    </Stack>
  );
};
