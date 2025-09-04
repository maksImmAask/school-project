import { Modal, Button, Group, Text, Stack } from "@mantine/core";
import { useState } from "react";
import { useOwnersStore } from "../../../../../store/useOwnersStore";

interface DeleteOwnerModalProps {
  opened: boolean;
  onClose: () => void;
  ownerId: string;
  ownerName: string;
}

export const DeleteOwnerModal = ({
  opened,
  onClose,
  ownerId,
  ownerName,
}: DeleteOwnerModalProps) => {
  const deleteOwner = useOwnersStore((state) => state.deleteOwner);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await deleteOwner(ownerId);
    setLoading(false);
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Подтверждение удаления"
      centered
    >
      <Stack>
        <Text>
          Вы уверены, что хотите удалить владельца{" "}
          <strong>{ownerName}</strong>?
        </Text>
        <Group justify="flex-end">
          <Button variant="default" onClick={onClose}>
            Отмена
          </Button>
          <Button onClick={handleDelete} loading={loading}>
            Удалить
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
