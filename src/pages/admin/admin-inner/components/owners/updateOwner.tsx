import {
  Modal,
  TextInput,
  Button,
  Stack,
  Group,
  Loader,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { useOwnersStore } from "../../../../../store/useOwnersStore";

interface EditOwnerModalProps {
  opened: boolean;
  onClose: () => void;
  ownerId: string;
}

export const EditOwnerModal = ({ opened, onClose, ownerId }: EditOwnerModalProps) => {
  const { getOwner, updateOwner } = useOwnersStore();
  const [initialLoading, setInitialLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      surname: "",
      job: "",
      desc: "",
    },
    validate: {
      name: (value) => (value.length < 2 ? "Имя должно быть не короче 2 символов" : null),
      surname: (value) => (value.length < 2 ? "Фамилия должна быть не короче 2 символов" : null),
      job: (value) => (value.length < 2 ? "Должность должна быть не короче 2 символов" : null),
      desc: (value) => (value.length < 5 ? "Описание должно быть не короче 5 символов" : null),
    },
  });

  useEffect(() => {
    const fetchOwner = async () => {
      if (!opened || !ownerId) return;
      setInitialLoading(true);

      const owner = await getOwner(ownerId);
      if (owner) {
        form.setValues({
          name: owner.name,
          surname: owner.surname,
          job: owner.job,
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
            <TextInput
              label="Должность"
              placeholder="Введите должность"
              {...form.getInputProps("job")}
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
