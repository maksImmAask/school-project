import { Modal, TextInput, Button, Stack, Group, Loader } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { usePositionsStore } from "../../../../../store/usePositionStore";

interface EditPositionModalProps {
  opened: boolean;
  onClose: () => void;
  positionId: string;
}

export const EditPositionModal = ({ opened, onClose, positionId }: EditPositionModalProps) => {
  const { positions, updatePosition } = usePositionsStore();
  const [saving, setSaving] = useState(false);

  const form = useForm({
    initialValues: {
      title: "",
    },
    validate: {
      title: (value) => (value.length < 2 ? "Название должно быть не короче 2 символов" : null),
    },
  });

  useEffect(() => {
    if (!opened || !positionId) return;
    const position = positions.find((pos) => pos.id === positionId);
    if (position) {
      form.setValues({ title: position.title });
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, positionId, positions]);

  const handleSubmit = async (values: typeof form.values) => {
    setSaving(true);
    await updatePosition(positionId, values.title);
    setSaving(false);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Редактировать должность" centered>
      {positions.length === 0 ? (
        <Loader />
      ) : (
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              label="Название должности"
              placeholder="Введите название должности"
              {...form.getInputProps("title")}
            />

            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={onClose}>
                Отмена
              </Button>
              <Button type="submit" color="blue" loading={saving}>
                Сохранить
              </Button>
            </Group>
          </Stack>
        </form>
      )}
    </Modal>
  );
};
