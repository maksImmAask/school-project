import { useEffect, useState } from "react";
import { useGalleryStore } from "../../../store/useGaleryStore";
import {
  Table,
  Loader,
  Center,
  Text,
  Button,
  Flex,
  ScrollArea,
} from "@mantine/core";
import { ShowGalleryModal } from "./components/gallery/showGallery";
import { AddGalleryModal } from "./components/gallery/addGallery";
import { EditGalleryModal } from "./components/gallery/editGallery";
import { DeleteGalleryModal } from "./components/gallery/deleteGallery";

export const Gallery = () => {
  const { gallery, loading, error, fetchGallery } = useGalleryStore();

  const [showOpened, setShowOpened] = useState(false);
  const [createOpened, setCreateOpened] = useState(false);
  const [editOpened, setEditOpened] = useState(false);
  const [deleteOpened, setDeleteOpened] = useState(false);

  const [selectedItem, setSelectedItem] = useState<{
    id: string;
    title: string;
    img: string;
  } | null>(null);

  useEffect(() => {
    fetchGallery();
  }, [fetchGallery]);

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

  const openShowModal = (item: { id: string; title: string; img: string }) => {
    setSelectedItem(item);
    setShowOpened(true);
  };

  const openEditModal = (item: { id: string; title: string; img: string }) => {
    setSelectedItem(item);
    setEditOpened(true);
  };

  const openDeleteModal = (item: { id: string; title: string; img: string }) => {
    setSelectedItem(item);
    setDeleteOpened(true);
  };

  return (
    <ScrollArea>
      <Flex justify="space-between" mb="md">
        <Text size="30px" fw={700}>
          Gallery
        </Text>
        <Button onClick={() => setCreateOpened(true)}>Add Image</Button>
      </Flex>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: "40%" }}>Название</Table.Th>
            <Table.Th style={{ width: "60%" }}>Действия</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {gallery.length === 0 ? (
            <Table.Tr>
              <Table.Td colSpan={2}>
                <Center>
                  <Text size="lg" color="dimmed">
                    Галерея пуста
                  </Text>
                </Center>
              </Table.Td>
            </Table.Tr>
          ) : (
            gallery.map((item) => (
              <Table.Tr key={item.id}>
                <Table.Td>
                  <Text fw={500}>{item.title}</Text>
                </Table.Td>

                <Table.Td>
                  <Flex gap="sm" justify="center">
                    <Button
                      size="xs"
                      variant="light"
                      onClick={() => openShowModal(item)}
                    >
                      Показать
                    </Button>

                    <Button
                      size="xs"
                      onClick={() => openEditModal(item)}
                    >
                      Редактировать
                    </Button>

                    <Button
                      size="xs"
                      variant="outline"
                      onClick={() => openDeleteModal(item)}
                    >
                      Удалить
                    </Button>
                  </Flex>
                </Table.Td>
              </Table.Tr>
            ))
          )}
        </Table.Tbody>
      </Table>

      {/* Модалки */}
      {selectedItem && (
        <>
          <ShowGalleryModal
            opened={showOpened}
            onClose={() => setShowOpened(false)}
            item={selectedItem}
          />

          <EditGalleryModal
            opened={editOpened}
            onClose={() => setEditOpened(false)}
            item={selectedItem}
          />

          <DeleteGalleryModal
            opened={deleteOpened}
            onClose={() => setDeleteOpened(false)}
            item={selectedItem}
          />
        </>
      )}

      <AddGalleryModal
        opened={createOpened}
        onClose={() => setCreateOpened(false)}
      />
    </ScrollArea>
  );
};
