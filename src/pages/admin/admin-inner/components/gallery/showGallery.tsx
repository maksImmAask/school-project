import { Modal, Image, Text, Center } from "@mantine/core";

interface ShowGalleryModalProps {
  opened: boolean;
  onClose: () => void;
  item: {
    id: string;
    title: string;
    img: string;
  };
}

export const ShowGalleryModal = ({ opened, onClose, item }: ShowGalleryModalProps) => {
  return (
    <Modal opened={opened} onClose={onClose} title={item.title} centered>
      <Center>
        <Image
          src={item.img}
          alt={item.title}
          width={400}
          height={400}
          fit="contain"
          radius="md"
        />
      </Center>
      <Text ta="center" mt="sm">
        {item.title}
      </Text>
    </Modal>
  );
};
