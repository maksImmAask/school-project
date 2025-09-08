import { Modal, Text, Button, Group, Stack } from "@mantine/core";
import { useState } from "react";
import { useFacultiesStore } from "../../../../../store/useFacultyStore";

interface ConfirmDeleteModalProps {
  opened: boolean;
  onClose: () => void;
  facultyId: string;
  facultyTitle?: string;
}

export const ConfirmDeleteModal = ({
  opened,
  onClose,
  facultyId,
  facultyTitle,
}: ConfirmDeleteModalProps) => {
  const [loading, setLoading] = useState(false);
  const deleteFaculty = useFacultiesStore((state) => state.deleteFaculty);

  const handleDelete = async () => {
    setLoading(true);
    await deleteFaculty(facultyId);
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
          <strong>{facultyTitle || "этот факультет"}</strong>?
        </Text>
        <Group justify="flex-end">
          <Button variant="outline" onClick={onClose}>
            Отмена
          </Button>
          <Button color="red" loading={loading} onClick={handleDelete}>
            Удалить
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
