import {
  Modal,
  TextInput,
  NumberInput,
  Button,
  Stack,
  Group,
  Loader,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { useUsersStore } from "../../../../store/useUserStore";

interface EditUserModalProps {
  opened: boolean;
  onClose: () => void;
  userId: string;
}

export const EditUserModal = ({ opened, onClose, userId }: EditUserModalProps) => {
  const { getUser, updateUser } = useUsersStore();
  const [initialLoading, setInitialLoading] = useState(true); // загрузка данных пользователя
  const [saving, setSaving] = useState(false); // индикатор сохранения

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: 0,
      phone: "",
    },
    validate: {
      name: (value) => (value.length < 2 ? "Имя должно быть не короче 2 символов" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Некорректный email"),
      password: (value) => (value.length < 4 ? "Пароль слишком короткий" : null),
      age: (value) => (value <= 0 ? "Возраст должен быть больше 0" : null),
      phone: (value) =>
        value.length < 5 ? "Телефон должен быть не короче 5 символов" : null,
    },
  });

  // Загружаем данные пользователя при открытии модалки
  useEffect(() => {
    const fetchUser = async () => {
      if (!opened || !userId) return;
      setInitialLoading(true);

      const user = await getUser(userId);
      if (user) {
        form.setValues({
          name: user.name,
          email: user.email,
          password: user.password,
          age: user.age,
          phone: user.phone,
        });
      }

      setInitialLoading(false);
    };

    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, userId, getUser]);

  const handleSubmit = async (values: typeof form.values) => {
    setSaving(true);
    await updateUser(userId, values);
    setSaving(false);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Редактировать пользователя" centered>
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
              label="Email"
              placeholder="Введите email"
              {...form.getInputProps("email")}
            />
            <TextInput
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
            <TextInput
              label="Телефон"
              placeholder="Введите номер телефона"
              {...form.getInputProps("phone")}
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
