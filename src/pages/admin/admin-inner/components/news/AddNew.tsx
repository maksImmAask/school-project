import {
  Modal,
  TextInput,
  Button,
  Stack,
  Group,
  FileInput,
  Image,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { useNewsStore } from "../../../../../store/useNewsStore";
import { fileToBase64 } from "../../../../../utils/filetobase64";

interface AddNewsModalProps {
  opened: boolean;
  onClose: () => void;
}

export const AddNewsModal = ({ opened, onClose }: AddNewsModalProps) => {
  const { addNewsItem } = useNewsStore();
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm({
    initialValues: {
      title: "",
      desc: "",
      date: "",
      img: null as File | null,
    },
    validate: {
      title: (value) =>
        value.length < 2 ? "Название должно быть не короче 2 символов" : null,
      desc: (value) =>
        value.length < 5 ? "Описание должно быть не короче 5 символов" : null,
      date: (value) => (!value ? "Введите дату" : null),
      img: (value) => (value === null ? "Выберите изображение" : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setSaving(true);

    const imgBase64 = await fileToBase64(values.img as File);

    await addNewsItem({
      title: values.title,
      desc: values.desc,
      date: values.date,
      img: imgBase64,
    });

    setSaving(false);
    form.reset();
    setPreview(null);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Добавить новость" centered>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Заголовок"
            placeholder="Введите заголовок"
            {...form.getInputProps("title")}
          />

          <Textarea
            label="Описание"
            placeholder="Введите описание"
            minRows={3}
            {...form.getInputProps("desc")}
          />

          <TextInput
            label="Дата"
            placeholder="2025-09-10"
            type="date"
            {...form.getInputProps("date")}
          />

          <FileInput
            label="Фото"
            placeholder="Выберите изображение"
            accept="image/*"
            {...form.getInputProps("img")}
            onChange={(file) => {
              form.setFieldValue("img", file);
              if (file) {
                fileToBase64(file).then(setPreview);
              } else {
                setPreview(null);
              }
            }}
          />

          {preview && (
            <Image
              src={preview}
              alt="Превью"
              width={200}
              height={200}
              fit="contain"
              radius="md"
              style={{ border: "1px solid #ccc", marginTop: 10 }}
            />
          )}

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
