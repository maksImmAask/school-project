import {
  Modal,
  Button,
  TextInput,
  FileInput,
  Stack,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm , isNotEmpty} from "@mantine/form";
import { useEffect } from "react";
import { fileToBase64 } from "../../../../../utils/filetobase64";
import { useGalleryStore } from "../../../../../store/useGaleryStore";

interface GalleryModalProps {
  galleryId?: string | null;
}

export const GalleryModal = ({ galleryId }: GalleryModalProps) => {
  const { addGalleryItem, updateGalleryItem, gallery } = useGalleryStore();

  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      title: {
        ru: "",
        en: "",
        uz: "",
      },
      img: "",
    },
    validate: {
      title: {
        ru: isNotEmpty("Обязательное поле"),
        en: isNotEmpty("Обязательное поле"),
        uz: isNotEmpty("Обязательное поле"),
      },
      img: (value) => (!value ? "Обязательное поле" : null),
    },
  });

  useEffect(() => {
    if (opened && galleryId) {
      const existingItem = gallery.find((item) => item.id === galleryId);
      if (existingItem) {
        form.setValues({
          title: existingItem.title,
          img: existingItem.img,
        });
      }
    } else if (opened && !galleryId) {
      form.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, galleryId, gallery]);

  const handleFileChange = async (file: File | null) => {
    if (!file) return;
    const base64 = await fileToBase64(file);
    form.setFieldValue("img", base64);
  };

  const handleSubmit = form.onSubmit(async (values) => {
    if (galleryId) {
      await updateGalleryItem(galleryId, values);
    } else {
      await addGalleryItem(values);
    }
    close();
  });

  return (
    <>
      <Button variant={galleryId ? "light" : "filled"} onClick={open}>
        {galleryId ? "Редактировать" : "Добавить элемент"}
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        title={galleryId ? "Редактировать элемент" : "Добавить элемент"}
        centered
        size="md"
      >
        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              label="Название (Русский)"
              placeholder="Введите название на русском"
              {...form.getInputProps("title.ru")}
            />
            <TextInput
              label="Название (Английский)"
              placeholder="Введите название на английском"
              {...form.getInputProps("title.en")}
            />
            <TextInput
              label="Название (Узбекский)"
              placeholder="Введите название на узбекском"
              {...form.getInputProps("title.uz")}
            />

            <FileInput
              label="Изображение"
              placeholder="Загрузите фото"
              accept="image/*"
              onChange={handleFileChange}
            />

            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={close}>
                Отмена
              </Button>
              <Button type="submit" color="blue">
                {galleryId ? "Сохранить" : "Добавить"}
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
