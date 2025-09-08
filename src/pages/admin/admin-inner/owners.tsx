import { useState } from "react";
import { Button, Flex, Table, Text } from "@mantine/core";
import { useOwnersStore } from "../../../store/useOwnersStore";
import { DeleteOwnerModal } from "./components/owners/deleteOwner";
import { EditOwnerModal } from "./components/owners/updateOwner";
import { AddOwnerModal } from "./components/owners/createOwner";

export const Owners = () => {
  const { owners, loading } = useOwnersStore();

  const [createOpened, setCreateOpened] = useState(false);
  const [updateOpened, setUpdateOpened] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const [selectedOwnerId, setSelectedOwnerId] = useState<string | null>(null);

  const openUpdateModal = (id: string) => {
    setSelectedOwnerId(id);
    setUpdateOpened(true);
  };

  const openDeleteModal = (ownerId: string, ownerName: string) => {
    setSelectedOwner({ id: ownerId, name: ownerName });
    setDeleteModalOpen(true);
  };


  const rows = owners.map((owner, index) => (
    <Table.Tr key={owner.id}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{owner.name}</Table.Td>
      <Table.Td>{owner.surname}</Table.Td>
      <Table.Td>{owner.job}</Table.Td>
      <Table.Td>{owner.desc}</Table.Td>
      <Table.Td>
        <Button
          size="xs"
          mr="xs"
          onClick={() => openUpdateModal(owner.id)}
        >
          Update
        </Button>

        <Button
        variant="outline"
          size="xs"
          onClick={() => openDeleteModal(owner.id, owner.name)}
        >
          Удалить
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Flex justify="space-between" mb="md">
        <Text size="30px" fw={700}>
          Owners
        </Text>
        <Button onClick={() => setCreateOpened(true)}>Add Owner</Button>
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

      <AddOwnerModal
        opened={createOpened}
        onClose={() => setCreateOpened(false)}
      />

      {selectedOwnerId && (
        <EditOwnerModal
          opened={updateOpened}
          onClose={() => setUpdateOpened(false)}
          ownerId={selectedOwnerId}
        />
      )}
      {selectedOwner && (
        <DeleteOwnerModal
          opened={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          ownerId={selectedOwner.id}
          ownerName={selectedOwner.name}
        />
      )}

    </>
  );
};
