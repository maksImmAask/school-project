import { Modal, Text, Button, Group, Stack } from "@mantine/core";
import { useState } from "react";
import { useUsersStore } from "../../../../../store/useUserStore";

interface ConfirmDeleteModalProps {
  opened: boolean;
  onClose: () => void;
  userId: string;
  userName?: string;
}

export const ConfirmDeleteModal = ({
  opened,
  onClose,
  userId,
  userName,
}: ConfirmDeleteModalProps) => {
  const [loading, setLoading] = useState(false);
  const deleteUser = useUsersStore((state) => state.deleteUser);

  const handleDelete = async () => {
    setLoading(true);
    await deleteUser(userId); 
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
          Вы уверены, что хотите удалить{" "}
          <strong>{userName || "этого пользователя"}</strong>?
        </Text>
        <Group justify="flex-end">
          <Button variant="outline" onClick={onClose}>
            Отмена
          </Button>
          <Button loading={loading} onClick={handleDelete}>
            Удалить
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
