import {
  Modal,
  Button,
  TextInput,
  Stack,
  Group,
  NumberInput,
  PasswordInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { useUsersStore } from "../../../../../store/useUserStore";

interface UserModalProps {
  userId?: string | null;
}

export const UserModal = ({ userId }: UserModalProps) => {
  const { addUser, updateUser, getUser } = useUsersStore();

  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      phone: "",
      role: "user",
      avatar: "",
    },
    validate: {
      name: (value) =>
        value.trim().length < 2 ? "Имя должно содержать минимум 2 символа" : null,
      email: (value) =>
        !/^\S+@\S+\.\S+$/.test(value) ? "Введите корректный email" : null,
      password: (value) =>
        value.trim().length < 4 ? "Пароль должен быть минимум 6 символов" : null,
      age: (value) =>
        !/^\d+$/.test(value) ? "Возраст должен быть числом" : null,
      phone: (value) =>
        !/^\+?\d{7,15}$/.test(value) ? "Введите корректный номер телефона" : null,
      role: (value) =>
        !value.trim() ? "Роль обязательна для заполнения" : null,
    },
  });

  useEffect(() => {
    if (opened && userId) {
      const fetchUser = async () => {
        const user = await getUser(userId);
        if (user) {
          form.setValues({
            name: user.name,
            email: user.email,
            password: user.password,
            age: String(user.age),
            phone: user.phone,
            role: user.role,
          });
        }
      };
      fetchUser();
    } else if (opened && !userId) {
      form.reset();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, userId, getUser]);


  const handleSubmit = form.onSubmit(async (values) => {
    const formattedValues = {
      ...values,
      age: Number(values.age),
    };

    if (userId) {
      await updateUser(userId, formattedValues);
    } else {
      await addUser(formattedValues);
    }
    close();
  });

  return (
    <>
      <Button
        variant={userId ? "light" : "filled"}
        onClick={open}
      >
        {userId ? "Редактировать пользователя" : "Добавить пользователя"}
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        title={userId ? "Редактировать пользователя" : "Добавить пользователя"}
        centered
        size="md"
      >
        <form onSubmit={handleSubmit}>
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
              {...form.getInputProps("password")}
            />
            <NumberInput
              label="Возраст"
              placeholder="Введите возраст"
              {...form.getInputProps("age")}
            />
            <NumberInput
              label="Телефон"
              placeholder="Введите телефон"
              {...form.getInputProps("phone")}
            />

            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={close}>
                Отмена
              </Button>
              <Button type="submit" color="blue">
                {userId ? "Сохранить" : "Добавить"}
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
