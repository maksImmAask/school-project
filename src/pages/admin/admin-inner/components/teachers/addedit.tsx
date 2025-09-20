import {
  Modal,
  Button,
  TextInput,
  Stack,
  Group,
  FileInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm, isNotEmpty } from "@mantine/form";
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
      firstName: { ru: "", en: "", uz: "" },
      lastName: { ru: "", en: "", uz: "" },
      subject: { ru: "", en: "", uz: "" },
      avatar: "",
    },
    validate: {
      firstName: {
        ru: isNotEmpty("Обязательное поле"),
        en: isNotEmpty("Обязательное поле"),
        uz: isNotEmpty("Обязательное поле"),
      },
      lastName: {
        ru: isNotEmpty("Обязательное поле"),
        en: isNotEmpty("Обязательное поле"),
        uz: isNotEmpty("Обязательное поле"),
      },
      subject: {
        ru: isNotEmpty("Обязательное поле"),
        en: isNotEmpty("Обязательное поле"),
        uz: isNotEmpty("Обязательное поле"),
      },
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              label="Имя (ru)"
              placeholder="Введите имя на русском"
              {...form.getInputProps("firstName.ru")}
            />
            <TextInput
              label="Имя (en)"
              placeholder="Введите имя на английском"
              {...form.getInputProps("firstName.en")}
            />
            <TextInput
              label="Имя (uz)"
              placeholder="Введите имя на узбекском"
              {...form.getInputProps("firstName.uz")}
            />
            <TextInput
              label="Фамилия (ru)"
              placeholder="Введите фамилию на русском"
              {...form.getInputProps("lastName.ru")}
            />
            <TextInput
              label="Фамилия (en)"
              placeholder="Введите фамилию на английском"
              {...form.getInputProps("lastName.en")}
            />
            <TextInput
              label="Фамилия (uz)"
              placeholder="Введите фамилию на узбекском"
              {...form.getInputProps("lastName.uz")}
            />

            <TextInput
              label="Предмет (ru)"
              placeholder="Введите предмет на русском"
              {...form.getInputProps("subject.ru")}
            />
            <TextInput
              label="Предмет (en)"
              placeholder="Введите предмет на английском"
              {...form.getInputProps("subject.en")}
            />
            <TextInput
              label="Предмет (uz)"
              placeholder="Введите предмет на узбекском"
              {...form.getInputProps("subject.uz")}
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
