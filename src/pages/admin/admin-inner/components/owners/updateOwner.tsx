import {
  Modal,
  TextInput,
  Button,
  Stack,
  Group,
  Loader,
  Select,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { useOwnersStore } from "../../../../../store/useOwnersStore";
import { usePositionsStore } from "../../../../../store/usePositionStore";

interface EditOwnerModalProps {
  opened: boolean;
  onClose: () => void;
  ownerId: string;
}

export const EditOwnerModal = ({ opened, onClose, ownerId }: EditOwnerModalProps) => {
  const { getOwner, updateOwner } = useOwnersStore();
  const { positions, fetchPositions } = usePositionsStore();
  const [initialLoading, setInitialLoading] = useState(true);
  const [saving, setSaving] = useState(false);

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

  useEffect(() => {
    fetchPositions();
  }, [fetchPositions]);

  useEffect(() => {
    const fetchOwner = async () => {
      if (!opened || !ownerId) return;
      setInitialLoading(true);

      const owner = await getOwner(ownerId);
      if (owner) {
        form.setValues({
          name: owner.name,
          surname: owner.surname,
          positionId: owner.positionId,
          desc: owner.desc,
        });
      }

      setInitialLoading(false);
    };

    fetchOwner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, ownerId]);

  const handleSubmit = async (values: typeof form.values) => {
    setSaving(true);
    await updateOwner(ownerId, values);
    setSaving(false);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Редактировать владельца" centered>
      {initialLoading ? (
        <Loader />
      ) : (
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
                Сохранить
              </Button>
            </Group>
          </Stack>
        </form>
      )}
    </Modal>
  );
};
