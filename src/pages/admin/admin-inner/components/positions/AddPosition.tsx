import { Modal, TextInput, Button, Stack, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { usePositionsStore } from "../../../../../store/usePositionStore";

interface AddPositionModalProps {
  opened: boolean;
  onClose: () => void;
}

export const AddPositionModal = ({ opened, onClose }: AddPositionModalProps) => {
  const { addPosition } = usePositionsStore();
  const [saving, setSaving] = useState(false);

  const form = useForm({
    initialValues: {
      title: "",
    },
    validate: {
      title: (value) => (value.length < 2 ? "Название должно быть не короче 2 символов" : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setSaving(true);
    await addPosition(values.title);
    setSaving(false);
    form.reset();
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Добавить должность" centered>
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
              Добавить
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
};
