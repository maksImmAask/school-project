import { Modal, Text, Button, Group, Stack } from "@mantine/core";
import { useState } from "react";
import { usePositionsStore } from "../../../../../store/usePositionStore";

interface ConfirmDeleteModalProps {
  opened: boolean;
  onClose: () => void;
  positionId: string;
  positionTitle?: string;
}

export const ConfirmDeleteModal = ({
  opened,
  onClose,
  positionId,
  positionTitle,
}: ConfirmDeleteModalProps) => {
  const [loading, setLoading] = useState(false);
  const deletePosition = usePositionsStore((state) => state.deletePosition);

  const handleDelete = async () => {
    setLoading(true);
    await deletePosition(positionId);
    setLoading(false);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Подтверждение удаления" centered>
      <Stack>
        <Text>
          Вы уверены, что хотите удалить должность{" "}
          <strong>{positionTitle || "без названия"}</strong>?
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
