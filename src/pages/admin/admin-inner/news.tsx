import { useEffect, useState } from "react";
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
} from "@mantine/core";
import { useNewsStore } from "../../../store/useNewsStore";
import type { NewsItem } from "../../../store/useNewsStore";
import { AddNewsModal } from "./components/news/AddNew";
import { EditNewsModal } from "./components/news/EditNews";
import { DeleteNewsModal } from "./components/news/DeleteNews";

export const News = () => {
  const { news, loading, error, fetchNews } = useNewsStore();

  const [createOpened, setCreateOpened] = useState(false);
  const [editOpened, setEditOpened] = useState(false);
  const [deleteOpened, setDeleteOpened] = useState(false);

  const [imageOpened, setImageOpened] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedForDelete, setSelectedForDelete] = useState<{
    id: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const openDeleteModal = (id: string, title: string) => {
    setSelectedForDelete({ id, title });
    setDeleteOpened(true);
  };

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setImageOpened(true);
  };

  const rows = news.map((item: NewsItem, index: number) => (
    <Table.Tr key={item.id}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{item.title}</Table.Td>
      <Table.Td>{item.desc}</Table.Td>
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
        <Button
          size="xs"
          mr="xs"
          onClick={() => {
            setSelectedNews(item);
            setEditOpened(true);
          }}
        >
          Редактировать
        </Button>

        <Button
          size="xs"
          variant="outline"
          onClick={() => openDeleteModal(item.id, item.title)}
        >
          Удалить
        </Button>
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
    <>
      <Flex justify="space-between" mb="md">
        <Text size="30px" fw={700}>
          Новости
        </Text>
        <Button onClick={() => setCreateOpened(true)}>Добавить новость</Button>
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

      <AddNewsModal opened={createOpened} onClose={() => setCreateOpened(false)} />

      {selectedNews && (
        <EditNewsModal
          opened={editOpened}
          onClose={() => {
            setEditOpened(false);
            setSelectedNews(null);
          }}
          news={selectedNews}
        />
      )}

      {selectedForDelete && (
        <DeleteNewsModal
          opened={deleteOpened}
          onClose={() => {
            setDeleteOpened(false);
            setSelectedForDelete(null);
          }}
          newsId={selectedForDelete.id}
          newsTitle={selectedForDelete.title}
        />
      )}
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
    </>
  );
};
