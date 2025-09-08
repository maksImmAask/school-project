import {
  Button,
  FileInput,
  Modal,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTeachersStore } from "../../../../../store/useTeachersStore";
import { fileToBase64 } from "../../../../../utils/filetobase64";
import { useState } from "react";

interface AddTeacherModalProps {
  opened: boolean;
  onClose: () => void;
}

export const AddTeacherModal = ({ opened, onClose }: AddTeacherModalProps) => {
  const { addTeacher } = useTeachersStore();
  const [fileError, setFileError] = useState<string | null>(null);

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      subject: "",
      avatar: "", 
    },
  });

  const handleFileChange = async (file: File | null) => {
    if (!file) {
      setFileError("Файл не выбран");
      form.setFieldValue("avatar", "");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setFileError("Можно загружать только изображения");
      return;
    }

    setFileError(null);
    const base64 = await fileToBase64(file);
    form.setFieldValue("avatar", base64);
  };

  const handleSubmit = async (values: typeof form.values) => {
    if (!values.avatar) {
      setFileError("Выберите файл");
      return;
    }

    await addTeacher(values);
    form.reset();
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Добавить учителя" centered>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Имя"
            {...form.getInputProps("firstName")}
            required
          />
          <TextInput
            label="Фамилия"
            {...form.getInputProps("lastName")}
            required
          />
          <TextInput
            label="Предмет"
            {...form.getInputProps("subject")}
            required
          />

          <FileInput
            label="Аватар"
            placeholder="Выберите файл"
            accept="image/*"
            onChange={handleFileChange}
            error={fileError}
            required
          />

          <Button type="submit">Добавить</Button>
        </Stack>
      </form>
    </Modal>
  );
};
