import {
  Modal,
  Button,
  TextInput,
  Stack,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { isNotEmpty, useForm } from "@mantine/form";
import { useEffect } from "react";
import { useQuestionsStore } from "../../../../../store/useQuestionsStore";

interface QuestionModalProps {
  questionId?: string | null;
}

const INITIAL_VALUES = {
  question: { ru: "", en: "", uz: "" },
  answer: { ru: "", en: "", uz: "" },
};

export const QuestionModal = ({ questionId }: QuestionModalProps) => {
  const { addQuestion, updateQuestion, getQuestion } = useQuestionsStore();

  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: INITIAL_VALUES,
    validate: {
      question: {
        ru: isNotEmpty("Обязательное поле"),
        en: isNotEmpty("Обязательное поле"),
        uz: isNotEmpty("Обязательное поле"),
      },
      answer: {
        ru: isNotEmpty("Обязательное поле"),
        en: isNotEmpty("Обязательное поле"),
        uz: isNotEmpty("Обязательное поле"),
      },
    },
  });

  useEffect(() => {
    if (opened && questionId) {
      const fetchQuestion = async () => {
        const question = await getQuestion(questionId);
        if (question) {
          form.setValues({
            question: question.question,
            answer: question.answer,
          });
        }
      };
      fetchQuestion();
    } else if (opened && !questionId) {
      form.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, questionId, getQuestion]);

  const handleSubmit = form.onSubmit(async (values) => {
    if (questionId) {
      await updateQuestion(questionId, values);
    } else {
      await addQuestion(values);
    }
    close();
  });

  return (
    <>
      <Button
        variant={questionId ? "light" : "filled"}
        onClick={open}
      >
        {questionId ? "Редактировать" : "Добавить вопрос"}
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        title={questionId ? "Редактировать вопрос" : "Добавить вопрос"}
        centered
        size="md"
      >
        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              label="Вопрос (ru)"
              placeholder="Введите вопрос на русском"
              {...form.getInputProps("question.ru")}
            />
            <TextInput
              label="Вопрос (en)"
              placeholder="Введите вопрос на английском"
              {...form.getInputProps("question.en")}
            />
            <TextInput
              label="Вопрос (uz)"
              placeholder="Введите вопрос на узбекском"
              {...form.getInputProps("question.uz")}
            />

            <TextInput
              label="Описание (ru)"
              placeholder="Введите описание на русском"
              {...form.getInputProps("answer.ru")}
            />
            <TextInput
              label="Описание (en)"
              placeholder="Введите описание на английском"
              {...form.getInputProps("answer.en")}
            />
            <TextInput
              label="Описание (uz)"
              placeholder="Введите описание на узбекском"
              {...form.getInputProps("answer.uz")}
            />

            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={close}>
                Отмена
              </Button>
              <Button type="submit" color="blue">
                {questionId ? "Сохранить" : "Добавить"}
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
