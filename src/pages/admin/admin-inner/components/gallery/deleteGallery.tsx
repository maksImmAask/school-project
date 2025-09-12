import { Modal, Button, Group, Text } from "@mantine/core";
import { useGalleryStore } from "../../../../../store/useGaleryStore";

interface DeleteGalleryModalProps {
  opened: boolean;
  onClose: () => void;
  item: {
    id: string;
    title: string;
  };
}

export const DeleteGalleryModal = ({ opened, onClose, item }: DeleteGalleryModalProps) => {
  const { deleteGalleryItem } = useGalleryStore();

  const handleDelete = async () => {
    await deleteGalleryItem(item.id);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Удалить фото" centered>
      <Text size="sm">
        Вы уверены, что хотите удалить <strong>{item.title}</strong>?
      </Text>

      <Group justify="flex-end" mt="md">
        <Button variant="outline" onClick={onClose}>
          Отмена
        </Button>
        <Button onClick={handleDelete}>
          Удалить
        </Button>
      </Group>
    </Modal>
  );
};
