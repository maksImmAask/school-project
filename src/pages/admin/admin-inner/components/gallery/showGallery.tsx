import { Modal, Image, Text, Center } from "@mantine/core";
import { useTranslation } from "react-i18next";
interface ShowGalleryModalProps {
  opened: boolean;
  onClose: () => void;
  item: {
    id: string;
    title: {
      ru: string;
      en: string;
      uz: string;
    };
    img: string;
  };
}


export const ShowGalleryModal = ({ opened, onClose, item }: ShowGalleryModalProps) => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language as "ru" | "en" | "uz";

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={item.title[currentLang]}
      centered
    >
      <Center>
        <Image
          src={item.img}
          alt={item.title[currentLang]}
          width={400}
          height={400}
          fit="contain"
          radius="md"
        />
      </Center>
      <Text ta="center" mt="sm">
        {item.title[currentLang]}
      </Text>
    </Modal>
  );
};
