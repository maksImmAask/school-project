import { useEffect } from "react";
import { Flex, Stack, Table, Text } from "@mantine/core";
import { useOwnersStore } from "../../../store/useOwnersStore";
import { usePositionsStore } from "../../../store/usePositionStore";
import { ConfirmDeleteModal } from "../../../shared/ui/confirmDelete";
import { OwnerModal } from "./components/owners/addedit";
import { useTranslation } from "react-i18next";

export const Owners = () => {
  const { owners, loading, fetchOwners, deleteOwner } = useOwnersStore();
  const { positions, fetchPositions } = usePositionsStore();
  const { i18n } = useTranslation();                                              
                                              
  useEffect(() => {                                              
    fetchOwners();                                              
    fetchPositions();                                              
  }, [fetchOwners, fetchPositions]);                                              
                                              
  const rows = owners.map((owner, index) => {                                              
    const position = positions.find((p) => p.id === owner.positionId);         

    return (
      <Table.Tr key={owner.id}>
        <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{owner.name[i18n.language as "ru" | "en" | "uz"]}</Table.Td>
      <Table.Td>{owner.surname[i18n.language as "ru" | "en" | "uz" ]}</Table.Td>
      <Table.Td>{owner.desc[i18n.language as "ru" | "en" | "uz"]}</Table.Td>
      <Table.Td>
        {position ? position.title[i18n.language as "ru" | "en" | "uz"] : "—"}
      </Table.Td>

        <Table.Td>
          <OwnerModal ownerId={owner.id} />
          <ConfirmDeleteModal onConfirm={() => deleteOwner(owner.id)} />
        </Table.Td>
      </Table.Tr>
    );
  });

  return (

    <Stack m="auto" mt={10}>
      <Flex justify="space-between" mb="md">
        <Text size="30px" fw={700}>
          Owners
        </Text>
    
        <OwnerModal />
      </Flex>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Surname</Table.Th>
            <Table.Th>Job</Table.Th>
            <Table.Th>Desc</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {loading ? (
            <Table.Tr>
              <Table.Td colSpan={6} style={{ textAlign: "center" }}>
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
