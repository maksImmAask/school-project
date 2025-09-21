import { useEffect, useState} from "react";
import {
  Table,
  Button,
  Flex,
  Text,
  Center,
  Loader,
  ScrollArea,
  Modal,
  Image,
  Stack,
} from "@mantine/core";
import { useNewsStore } from "../../../store/useNewsStore";
import type { NewsItem } from "../../../store/useNewsStore";
import { ConfirmDeleteModal } from "../../../shared/ui/confirmDelete";
import { NewsModal } from "./components/news/addedit";
import { useTranslation } from "react-i18next";

export const News = () => {
  const { news, loading, error, fetchNews, deleteNewsItem } = useNewsStore();
  const {i18n}=useTranslation()
  const [imageOpened, setImageOpened] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setImageOpened(true);
  };

  const rows = news.map((item: NewsItem, index: number) => (
    <Table.Tr key={item.id}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{item.title[i18n.language as "ru" | "en" | "uz"]}</Table.Td>
      <Table.Td>{item.desc[i18n.language as "ru" | "en" | "uz"]}</Table.Td>
      <Table.Td>{item.date}</Table.Td>
      <Table.Td>
        <Button
          size="xs"
          variant="light"
          onClick={() => openImageModal(item.img)}
        >
          Посмотреть изображение
        </Button>
      </Table.Td>
      <Table.Td>
        <Flex>
          <NewsModal newsId={item.id} />
        <ConfirmDeleteModal onConfirm={() => {deleteNewsItem(item.id)}} />
        </Flex>      
      </Table.Td>
    </Table.Tr>
  ));

  if (loading) {
    return (
      <Center h="80vh">
        <Loader size="lg" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center h="80vh">
        <Text color="red">{error}</Text>
      </Center>
    );
  }

  return (
    <Stack m="auto" mt={10}>
      <Flex justify="space-between" mb="md">
        <Text size="30px" fw={700}>
          Новости
        </Text>
        <NewsModal />
      </Flex>

      <ScrollArea>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>#</Table.Th>
              <Table.Th>Заголовок</Table.Th>
              <Table.Th>Описание</Table.Th>
              <Table.Th>Дата</Table.Th>
              <Table.Th>Изображение</Table.Th>
              <Table.Th>Действия</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {news.length === 0 ? (
              <Table.Tr>
                <Table.Td colSpan={6}>
                  <Center>
                    <Text size="lg" color="dimmed">
                      Новостей нет
                    </Text>
                  </Center>
                </Table.Td>
              </Table.Tr>
            ) : (
              rows
            )}
          </Table.Tbody>
        </Table>
      </ScrollArea>

      <Modal
        opened={imageOpened}
        onClose={() => {
          setImageOpened(false);
          setSelectedImage(null);
        }}
        title="Просмотр изображения"
        size="lg"
        centered
      >
        {selectedImage ? (
          <Center>
            <Image
              src={selectedImage}
              alt="Новость"
              fit="contain"
              radius="md"
              h={'400'}
              mah={500}
            />
          </Center>
        ) : (
          <Center>
            <Text>Нет изображения</Text>
          </Center>
        )}
      </Modal>
    </Stack>
  );
};
