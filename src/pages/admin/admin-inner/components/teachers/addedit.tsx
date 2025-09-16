import {
  Modal,
  Button,
  TextInput,
  Stack,
  Group,
  FileInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { fileToBase64 } from "../../../../../utils/filetobase64";
import { useTeachersStore } from "../../../../../store/useTeachersStore";

interface TeacherModalProps {
  teacherId?: string | null; 
}

export const TeacherModal = ({ teacherId }: TeacherModalProps) => {
  const { addTeacher, updateTeacher, getTeacherById } = useTeachersStore();

  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      subject: "",
      avatar: "",
    },
    validate: {
      firstName: (value) => (value.trim().length < 2 ? "Минимум 2 символа" : null),
      lastName: (value) => (value.trim().length < 2 ? "Минимум 2 символа" : null),
      subject: (value) => (!value.trim() ? "Обязательное поле" : null),
    },
  });

  useEffect(() => {
    if (opened && teacherId) {
      const fetchTeacher = async () => {
        const teacher = await getTeacherById(teacherId);
        if (teacher) {
          form.setValues({
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            subject: teacher.subject,
            avatar: teacher.avatar || "",
          });
        }
      };
      fetchTeacher();
    } else if (opened && !teacherId) {
      form.reset();
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, teacherId, getTeacherById]);

  const handleFileChange = async (file: File | null) => {
    if (!file) return;
    const base64 = await fileToBase64(file);
    form.setFieldValue("avatar", base64);
  };

  const handleSubmit = form.onSubmit(async (values) => {
    if (teacherId) {
      await updateTeacher(teacherId, values);
    } else {
      await addTeacher(values);
    }
    close();
  });

  return (
    <>
      <Button
        variant={teacherId ? "light" : "filled"}
        onClick={open}
      >
        {teacherId ? "Редактировать" : "Добавить учителя"}
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        title={teacherId ? "Редактировать учителя" : "Добавить учителя"}
        centered
        size="md"
      >
        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              label="Имя"
              placeholder="Введите имя"
              {...form.getInputProps("firstName")}
            />
            <TextInput
              label="Фамилия"
              placeholder="Введите фамилию"
              {...form.getInputProps("lastName")}
            />
            <TextInput
              label="Предмет"
              placeholder="Введите предмет"
              {...form.getInputProps("subject")}
            />

            <FileInput
              label="Аватар"
              placeholder="Загрузите фото"
              accept="image/*"
              onChange={handleFileChange}
            />

            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={close}>
                Отмена
              </Button>
              <Button type="submit" color="blue">
                {teacherId ? "Сохранить" : "Добавить"}
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
