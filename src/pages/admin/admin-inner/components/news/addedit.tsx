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
import { useNewsStore } from "../../../../../store/useNewsStore";

interface NewsModalProps {
  newsId?: string | null;
}

export const NewsModal = ({ newsId }: NewsModalProps) => {
  const { addNewsItem, updateNewsItem, getNewsItem } = useNewsStore();

  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      title: "",
      desc: "",
      img: "",
    },
    validate: {
      title: (value) => (value.trim().length < 3 ? "Минимум 3 символа" : null),
      desc: (value) => (!value.trim() ? "Обязательное поле" : null),
    },
  });

  useEffect(() => {
    if (opened && newsId) {
      const fetchNewsItem = async () => {
        const news = await getNewsItem(newsId);
        if (news) {
          form.setValues({
            title: news.title,
            desc: news.desc,
            img: news.img || "",
          });
        }
      };
      fetchNewsItem();
    } else if (opened && !newsId) {
      form.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, newsId, getNewsItem]);

  const handleFileChange = async (file: File | null) => {
    if (!file) return;
    const base64 = await fileToBase64(file);
    form.setFieldValue("img", base64);
  };

  const handleSubmit = form.onSubmit(async (values) => {
    const payload = {
      ...values,
      date: new Date().toISOString(),
    };

    if (newsId) {
      await updateNewsItem(newsId, payload);
    } else {
      await addNewsItem(payload);
    }
    close();
  });

  return (
    <>
      <Button
        variant={newsId ? "light" : "filled"}
        onClick={open}
      >
        {newsId ? "Редактировать" : "Добавить новость"}
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        title={newsId ? "Редактировать новость" : "Добавить новость"}
        centered
        size="md"
      >
        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              label="Заголовок"
              placeholder="Введите заголовок"
              {...form.getInputProps("title")}
            />
            <TextInput
              label="Описание"
              placeholder="Введите описание"
              {...form.getInputProps("desc")}
            />
            <FileInput
              label="Изображение"
              placeholder="Загрузите изображение"
              accept="image/*"
              onChange={handleFileChange}
            />

            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={close}>
                Отмена
              </Button>
              <Button type="submit" color="blue">
                {newsId ? "Сохранить" : "Добавить"}
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
