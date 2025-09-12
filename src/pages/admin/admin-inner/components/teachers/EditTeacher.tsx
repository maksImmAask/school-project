import {
  Button,
  Group,
  Modal,
  Stack,
  TextInput,
  FileInput,
  Image,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTeachersStore } from "../../../../../store/useTeachersStore";
import { fileToBase64 } from "../../../../../utils/filetobase64";
import { useEffect, useState } from "react";

interface EditTeacherModalProps {
  opened: boolean;
  onClose: () => void;
  teacherId: string | null;
}

export const EditTeacherModal = ({
  opened,
  onClose,
  teacherId,
}: EditTeacherModalProps) => {
  const { teachers, updateTeacher } = useTeachersStore();
  const teacher = teachers.find((t) => t.id === teacherId);

  const [preview, setPreview] = useState<string>(""); 

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      subject: "",
      avatar: null as File | null,
    },
  });

  useEffect(() => {
    if (teacher) {
      form.setValues({
        firstName: teacher.firstName,
        lastName: teacher.lastName,
        subject: teacher.subject,
        avatar: null,
      });
      setPreview(teacher.avatar || "");
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teacher]);

  const handleSubmit = async (values: typeof form.values) => {
    try {
      let avatarBase64 = teacher?.avatar || "";

      if (values.avatar) {
        avatarBase64 = await fileToBase64(values.avatar);
      }

      await updateTeacher(teacherId as string, {
        firstName: values.firstName,
        lastName: values.lastName,
        subject: values.subject,
        avatar: avatarBase64,
      });

      onClose();
      form.reset();
      setPreview("");
    } catch (error) {
      console.error("Ошибка при обновлении учителя", error);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Редактировать учителя"
      centered
  overlayProps={{
    backgroundOpacity: 0.4,
  }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Имя"
            placeholder="Введите имя"
            {...form.getInputProps("firstName")}
            required
          />
          <TextInput
            label="Фамилия"
            placeholder="Введите фамилию"
            {...form.getInputProps("lastName")}
            required
          />
          <TextInput
            label="Предмет"
            placeholder="Введите предмет"
            {...form.getInputProps("subject")}
            required
          />

          <FileInput
            label="Фото учителя"
            placeholder="Выберите файл"
            accept="image/*"
            onChange={async (file) => {
              form.setFieldValue("avatar", file);
              if (file) {
                const base64 = await fileToBase64(file);
                setPreview(base64); 
              } else {
                setPreview("");
              }
            }}
          />

          {preview && (
            <Image
              src={preview}
              alt="Превью фото учителя"
              style={{
                border: "1px solid #ccc",
                padding: "5px",
                borderRadius: "8px",
                maxHeight: "200px",
                objectFit: "contain",
              }}
            />
          )}

          <Group justify="flex-end" mt="md">
            <Button variant="default" onClick={onClose}>
              Отмена
            </Button>
            <Button type="submit">Сохранить</Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
};
