import {
  Modal,
  TextInput,
  Button,
  Stack,
  Group,
  Select,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState, useEffect } from "react";
import { useOwnersStore } from "../../../../../store/useOwnersStore";
import { usePositionsStore } from "../../../../../store/usePositionStore";

interface AddOwnerModalProps {
  opened: boolean;
  onClose: () => void;
}

export const AddOwnerModal = ({ opened, onClose }: AddOwnerModalProps) => {
  const { addOwner } = useOwnersStore();
  const { positions, fetchPositions } = usePositionsStore();
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchPositions();
  }, [fetchPositions]);

  const form = useForm({
    initialValues: {
      name: "",
      surname: "",
      positionId: "",
      desc: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Имя должно быть не короче 2 символов" : null,
      surname: (value) =>
        value.length < 2 ? "Фамилия должна быть не короче 2 символов" : null,
      positionId: (value) => (!value ? "Выберите должность" : null),
      desc: (value) =>
        value.length < 5 ? "Описание должно быть не короче 5 символов" : null,
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setSaving(true);
    await addOwner(values);
    setSaving(false);
    form.reset();
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Добавить владельца" centered>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Имя"
            placeholder="Введите имя"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Фамилия"
            placeholder="Введите фамилию"
            {...form.getInputProps("surname")}
          />

          <Select
            label="Должность"
            placeholder="Выберите должность"
            data={positions.map((p) => ({
              value: p.id,
              label: p.title,
            }))}
            {...form.getInputProps("positionId")}
          />

          <TextInput
            label="Описание"
            placeholder="Введите описание"
            {...form.getInputProps("desc")}
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
