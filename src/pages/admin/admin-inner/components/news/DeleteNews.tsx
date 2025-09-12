import { Modal, Button, Text, Group, Stack } from "@mantine/core";
import { useState } from "react";
import { useNewsStore } from "../../../../../store/useNewsStore";

interface DeleteNewsModalProps {
  opened: boolean;
  onClose: () => void;
  newsId: string;
  newsTitle: string;
}

export const DeleteNewsModal = ({
  opened,
  onClose,
  newsId,
  newsTitle,
}: DeleteNewsModalProps) => {
  const { deleteNewsItem } = useNewsStore();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    await deleteNewsItem(newsId);
    setDeleting(false);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Удалить новость" centered>
      <Stack>
        <Text>Вы уверены, что хотите удалить новость "{newsTitle}"?</Text>
        <Group justify="flex-end" mt="md">
          <Button variant="default" onClick={onClose}>
            Отмена
          </Button>
          <Button color="red" onClick={handleDelete} loading={deleting}>
            Удалить
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
