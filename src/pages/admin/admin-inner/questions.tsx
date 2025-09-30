import { useEffect } from "react";
import {
  Table,
  Group,
  Title,
  Loader,
  Center,
  Stack,
} from "@mantine/core";
import { useQuestionsStore } from "../../../store/useQuestionsStore";
import { ConfirmDeleteModal } from "../../../shared/ui/confirmDelete";
import { QuestionModal } from "./components/questions/addedit";
import { useTranslation } from "react-i18next";

export const QuestionsPage = () => {
  const { i18n } = useTranslation();
  const { questions, fetchQuestions, loading, deleteQuestion } = useQuestionsStore();

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  if (loading) {
    return (
      <Center mt={50}>
        <Loader size="lg" />
      </Center>
    );
  }

  return (
    <Stack m="auto" mt={10}>
      <Group mb="lg">
        <Title order={2}>Вопросы</Title>
        <QuestionModal />
      </Group>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Вопрос</Table.Th>
            <Table.Th>Ответ</Table.Th>
            <Table.Th>Действия</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {questions.length > 0 ? (
            questions.map((q, index) => (
              <Table.Tr key={q.id}>
                <Table.Td>{index + 1}</Table.Td>
                <Table.Td>{q.question[i18n.language as "ru"|'en'|'uz']}</Table.Td>
                <Table.Td>{q.answer[i18n.language as "ru"|'en'|'uz']}</Table.Td>
                <Table.Td>
                  <QuestionModal questionId={q.id} />
                  <ConfirmDeleteModal onConfirm={() => deleteQuestion(q.id)} />
                </Table.Td>
              </Table.Tr>
            ))
          ) : (
            <Table.Tr>
              <Table.Td colSpan={4} style={{ textAlign: "center" }}>
                Нет данных
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </Stack>
  );
};
