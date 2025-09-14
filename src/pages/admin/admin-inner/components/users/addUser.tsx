import {
  Modal,
  TextInput,
  NumberInput,
  Button,
  Stack,
  Group,
  PasswordInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { useUsersStore } from "../../../../../store/useUserStore";

interface AddUserModalProps {
  opened: boolean;
  onClose: () => void;
}

export const AddUserModal = ({ opened, onClose }: AddUserModalProps) => {
  const { addUser } = useUsersStore();
  const [saving, setSaving] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: 0,
      phone: "",
      role: "user",
    },
    validate: {
      name: (value) => (value.length < 2 ? "Имя должно быть не короче 2 символов" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Некорректный email"),
      password: (value) => (value.length < 4 ? "Пароль слишком короткий" : null),
      age: (value) => (value <= 0 ? "Возраст должен быть больше 0" : null),
      phone: (value) =>
        value.length < 7 ? "Телефон должен быть не короче 7 символов" : null,
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setSaving(true);
    await addUser(values);
    setSaving(false);
    form.reset();
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Добавить пользователя" centered>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Имя"
            placeholder="Введите имя"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="Введите email"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Пароль"
            placeholder="Введите пароль"
            type="password"
            {...form.getInputProps("password")}
          />
          <NumberInput
            label="Возраст"
            placeholder="Введите возраст"
            {...form.getInputProps("age")}
          />
          <NumberInput
            label="Телефон"
            placeholder="Введите номер телефона"
            {...form.getInputProps("phone")}
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
