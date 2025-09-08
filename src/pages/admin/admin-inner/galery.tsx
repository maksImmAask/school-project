import { useEffect } from "react";
import { useGalleryStore } from "../../../store/useGaleryStore";
import {
  Table,
  Image,
  Loader,
  Center,
  Text,
  Button,
  Flex,
  ScrollArea,
} from "@mantine/core";

export const Gallery = () => {
  const { gallery, loading, error, fetchGallery, deleteGalleryItem } =
    useGalleryStore();

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

  return (
    <ScrollArea>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: "30%" }}>Название</Table.Th>
            <Table.Th style={{ width: "50%" }}>Изображение</Table.Th>
            <Table.Th style={{ width: "20%" }}>Действия</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {gallery.length === 0 ? (
            <Table.Tr>
              <Table.Td colSpan={3}>
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
                  <Center>
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={150}
                      height={150}
                      fit="contain"
                      radius="md"
                      
                    />
                  </Center>
                </Table.Td>

                <Table.Td>
                  <Flex gap="sm" justify="center">
                    <Button
                      variant="outline"
                      size="xs"
                      onClick={() => deleteGalleryItem(item.id)}
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
    </ScrollArea>
  );
};
