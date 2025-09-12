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
import { useEffect, useState } from "react";
import { useNewsStore } from "../../../../../store/useNewsStore";
import { fileToBase64 } from "../../../../../utils/filetobase64";

interface EditNewsModalProps {
  opened: boolean;
  onClose: () => void;
  news: {
    id: string;
    title: string;
    desc: string;
    img: string;
    date: string;
  };
}

export const EditNewsModal = ({ opened, onClose, news }: EditNewsModalProps) => {
  const { updateNewsItem } = useNewsStore();
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState<string | null>(news?.img || null);

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
    },
  });

  useEffect(() => {
    if (opened && news) {
      form.setValues({
        title: news.title,
        desc: news.desc,
        date: news.date,
        img: null,
      });
      setPreview(news.img);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, news]);

  const handleSubmit = async (values: typeof form.values) => {
    setSaving(true);

    let imgBase64 = preview;
    if (values.img) {
      imgBase64 = await fileToBase64(values.img);
    }

    await updateNewsItem(news.id, {
      title: values.title,
      desc: values.desc,
      date: values.date,
      img: imgBase64!,
    });

    setSaving(false);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Редактировать новость" centered>
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
            type="date"
            {...form.getInputProps("date")}
          />

          <FileInput
            label="Новое фото (необязательно)"
            placeholder="Выберите изображение"
            accept="image/*"
            onChange={(file) => {
              form.setFieldValue("img", file);
              if (file) {
                fileToBase64(file).then(setPreview);
              } else {
                setPreview(news.img);
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
