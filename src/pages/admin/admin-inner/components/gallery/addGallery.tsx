import {
  Modal,
  TextInput,
  Button,
  Stack,
  Group,
  FileInput,
  Image,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { useGalleryStore } from "../../../../../store/useGaleryStore";
import { fileToBase64 } from "../../../../../utils/filetobase64";

interface AddGalleryModalProps {
  opened: boolean;
  onClose: () => void;
}

export const AddGalleryModal = ({ opened, onClose }: AddGalleryModalProps) => {
  const { addGalleryItem } = useGalleryStore();
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm({
    initialValues: {
      title: "",
      img: null as File | null,
    },
    validate: {
      title: (value) =>
        value.length < 2 ? "Название должно быть не короче 2 символов" : null,
      img: (value) => (value === null ? "Выберите изображение" : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setSaving(true);

    const imgBase64 = await fileToBase64(values.img as File);

    await addGalleryItem({
      title: values.title,
      img: imgBase64,
    });

    setSaving(false);
    form.reset();
    setPreview(null);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Добавить фото" centered>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Название"
            placeholder="Введите название"
            {...form.getInputProps("title")}
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
