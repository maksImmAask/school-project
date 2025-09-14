import { useState } from "react";
import { Modal, Text, Button, Group, Stack } from "@mantine/core"

interface ConfirmDeleteModalProps {
  onConfirm: () => void | Promise<void>; 
}

export const ConfirmDeleteModal = ({ onConfirm }: ConfirmDeleteModalProps) => {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await onConfirm();
      setOpened(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="outline"
        size="xs"
        onClick={() => setOpened(true)}
      >
        Удалить
      </Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Text size="lg" fw={600}>
            Подтверждение удаления
          </Text>
        }
        centered
        radius="md"
        overlayProps={{
          backgroundOpacity: 0.5,
          blur: 3,
        }}
      >
        <Stack>
          <Text size="sm" c="dimmed">
            Вы уверены, что хотите удалить этот элемент?  
            Это действие <b>нельзя отменить</b>.
          </Text>

          <Group justify="flex-end" mt="md">
            <Button variant="default" onClick={() => setOpened(false)}>
              Отмена
            </Button>
            <Button loading={loading} onClick={handleConfirm}>
              Удалить
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
};
