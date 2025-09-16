import { useEffect, useState } from "react";
import { useGalleryStore } from "../../../store/useGaleryStore";
import {
  Table,
  Loader,
  Center,
  Text,
  Button,
  Flex,
  Stack,
} from "@mantine/core";
import { GalleryModal } from "./components/gallery/addedit";
import { ShowGalleryModal } from "./components/gallery/showGallery";
import { ConfirmDeleteModal } from "../../../shared/ui/confirmDelete";

export const Gallery = () => {
  const { gallery, loading, error, fetchGallery , deleteGalleryItem} = useGalleryStore();

  const [showOpened, setShowOpened] = useState(false);

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



  return (
    <Stack>
      <Flex justify="space-between" mb="md">
        <Text size="30px" fw={700}>
          Gallery
        </Text>
        <GalleryModal />
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
                    <GalleryModal galleryId={item.id} />

                    <ConfirmDeleteModal onConfirm={() => {deleteGalleryItem(item.id)}} />

                  </Flex>
                </Table.Td>
              </Table.Tr>
            ))
          )}
        </Table.Tbody>
      </Table>

      {selectedItem && (
        <>
          <ShowGalleryModal
            opened={showOpened}
            onClose={() => setShowOpened(false)}
            item={selectedItem}
          />
        </>
      )}

    </Stack>
  );
};
