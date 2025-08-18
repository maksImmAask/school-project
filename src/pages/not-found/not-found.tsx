import { Center, Stack, Title, Text, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Center h="100vh">
      <Stack align="center" >
        <Title order={1} size="6rem" c="blue">
          404
        </Title>
        <Text size="xl" fw={500}>
           Страница не найдена
        </Text>
        <Text c="dimmed" size="md" ta="center" maw={400}>
          Возможно, вы ошиблись в адресе или страница была удалена.
        </Text>
        <Button onClick={() => navigate("/")} size="md" radius="md">
          На главную
        </Button>
      </Stack>
    </Center>
  );
};
