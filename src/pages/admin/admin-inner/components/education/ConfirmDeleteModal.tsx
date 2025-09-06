import { Modal, Button, Text, Group } from "@mantine/core";
import { useEducationStore } from "../../../../../store/useEducationStore";
import { useState } from "react";

type ConfirmDeleteModalProps = {
  opened: boolean;
  onClose: () => void;
  educationId: string | null;
};

export const ConfirmDeleteModal = ({
  opened,
  onClose,
  educationId,
}: ConfirmDeleteModalProps) => {
  const { deleteEducation } = useEducationStore();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!educationId) return;
    setLoading(true);
    await deleteEducation(educationId);
    setLoading(false);
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Удаление обучения"
      centered
      size="sm"
    >
      <Text size="sm" mb="md">
        Вы уверены, что хотите удалить это обучение? Это действие нельзя отменить.
      </Text>

      <Group justify="flex-end">
        <Button variant="default" onClick={onClose}>
          Отмена
        </Button>
        <Button color="red" loading={loading} onClick={handleDelete}>
          Удалить
        </Button>
      </Group>
    </Modal>
  );
};
