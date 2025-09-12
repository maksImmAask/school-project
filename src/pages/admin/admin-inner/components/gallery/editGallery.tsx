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
import { useEffect, useState } from "react";
import { useGalleryStore } from "../../../../../store/useGaleryStore";
import { fileToBase64 } from "../../../../../utils/filetobase64";

interface EditGalleryModalProps {
  opened: boolean;
  onClose: () => void;
  item: {
    id: string;
    title: string;
    img: string;
  };
}

export const EditGalleryModal = ({
  opened,
  onClose,
  item,
}: EditGalleryModalProps) => {
  const { updateGalleryItem } = useGalleryStore();
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState<string | null>(item?.img || null);

  const form = useForm({
    initialValues: {
      title: "",
      img: null as File | null,
    },
    validate: {
      title: (value) =>
        value.length < 2 ? "Название должно быть не короче 2 символов" : null,
    },
  });

  useEffect(() => {
    if (opened && item) {
      form.setValues({
        title: item.title,
        img: null,
      });
      setPreview(item.img);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, item]);

  const handleSubmit = async (values: typeof form.values) => {
    setSaving(true);

    let imgBase64 = preview;
    if (values.img) {
      imgBase64 = await fileToBase64(values.img);
    }

    await updateGalleryItem(item.id, {
      title: values.title,
      img: imgBase64!,
    });

    setSaving(false);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Редактировать фото" centered>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Название"
            placeholder="Введите название"
            {...form.getInputProps("title")}
          />

          <FileInput
            label="Новое фото (необязательно)"
            placeholder="Выберите новое изображение"
            accept="image/*"
            onChange={(file) => {
              form.setFieldValue("img", file);
              if (file) {
                fileToBase64(file).then(setPreview);
              } else {
                setPreview(item.img);
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
              Сохранить
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
};
