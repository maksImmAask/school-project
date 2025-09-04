import { useState } from "react";
import { Button, Flex, Table, Text } from "@mantine/core";
import { useOwnersStore } from "../../../store/useOwnersStore";
import { DeleteOwnerModal } from "./components/owners/deleteOwner";

export const Owners = () => {
  const { owners, loading } = useOwnersStore();

  const [opened, setOpened] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const openModal = (id: string, name: string) => {
    setSelectedOwner({ id, name });
    setOpened(true);
  };

  const rows = owners.map((owner, index) => (
    <Table.Tr key={owner.id}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{owner.name}</Table.Td>
      <Table.Td>{owner.surname}</Table.Td>
      <Table.Td>{owner.job}</Table.Td>
      <Table.Td>{owner.desc}</Table.Td>
      <Table.Td>
        <Button size="xs" mr="xs">
          Update
        </Button>
        <Button
          variant="outline"
          size="xs"
          onClick={() => openModal(owner.id, owner.name)}
        >
          Delete
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Flex justify={"space-between"} mb="md">
        <Text size="30px" fw={700}>
          Owners
        </Text>
        <Button>Add Owner</Button>
      </Flex>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>SurName</Table.Th>
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

      {selectedOwner && (
        <DeleteOwnerModal
          opened={opened}
          onClose={() => setOpened(false)}
          ownerId={selectedOwner.id}
          ownerName={selectedOwner.name}
        />
      )}
    </>
  );
};
