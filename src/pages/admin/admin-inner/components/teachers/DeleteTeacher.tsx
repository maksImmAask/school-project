import { Button, Group, Modal, Text } from "@mantine/core";
import { useTeachersStore } from "../../../../../store/useTeachersStore";

interface DeleteTeacherModalProps {
  opened: boolean;
  onClose: () => void;
  teacherId: string | null;
  teacherName: string;
}

export const DeleteTeacherModal = ({
  opened,
  onClose,
  teacherId,
  teacherName,
}: DeleteTeacherModalProps) => {
  const { deleteTeacher } = useTeachersStore();

  const handleDelete = async () => {
    if (!teacherId) return;
    await deleteTeacher(teacherId);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Удаление учителя" centered>
      <Text>
        Вы уверены, что хотите удалить учителя{" "}
        <strong>{teacherName}</strong>?
      </Text>

      <Group justify="flex-end" mt="md">
        <Button variant="default" onClick={onClose}>
          Отмена
        </Button>
        <Button color="red" onClick={handleDelete}>
          Удалить
        </Button>
      </Group>
    </Modal>
  );
};
