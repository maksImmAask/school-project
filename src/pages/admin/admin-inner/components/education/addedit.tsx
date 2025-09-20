import {
  Modal,
  Button,
  TextInput,
  Stack,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm, isNotEmpty } from "@mantine/form";
import { useEffect } from "react";
import { useEducationStore } from "../../../../../store/useEducationStore";
import { DateInput, TimeInput } from "@mantine/dates";

interface EducationModalProps {
  educationId?: string | null;
}

const INITIAL_VALUES = {
  title: { ru: "", en: "", uz: "" },
  desc: { ru: "", en: "", uz: "" },
  date: "",
  startTime: "",
  endTime: "",
};

export const EducationModal = ({ educationId }: EducationModalProps) => {
  const { addEducation, updateEducation, getEducation } = useEducationStore();
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: INITIAL_VALUES,
    validate: {
      title: {
        ru: isNotEmpty("Обязательное поле"),
        en: isNotEmpty("Обязательное поле"),
        uz: isNotEmpty("Обязательное поле"),
      },
      desc: {
        ru: isNotEmpty("Обязательное поле"),
        en: isNotEmpty("Обязательное поле"),
        uz: isNotEmpty("Обязательное поле"),
      },
      date: isNotEmpty("Дата обязательна"),
      startTime: isNotEmpty("Время начала обязательно"),
      endTime: isNotEmpty("Время окончания обязательно"),
    },
  });

  useEffect(() => {
    if (opened && educationId) {
      const fetchEducation = async () => {
        const education = await getEducation(educationId);
        if (education) {
          form.setValues(education); 
        }
      };
      fetchEducation();
    } else if (opened && !educationId) {
      form.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, educationId]);

  const handleSubmit = form.onSubmit(async (values) => {
    if (educationId) {
      await updateEducation(educationId, values);
    } else {
      await addEducation(values);
    }
    close();
  });

  return (
    <>
      <Button variant={educationId ? "light" : "filled"} onClick={open}>
        {educationId ? "Редактировать обучение" : "Добавить обучение"}
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        title={educationId ? "Редактировать обучение" : "Добавить обучение"}
        centered
        size="lg"  
      >
        <form onSubmit={handleSubmit}>. 
          <Stack>
            <TextInput
              label="Название (ru)"
              placeholder="Введите название на русском"
              {...form.getInputProps("title.ru")}
            />
            <TextInput
              label="Название (en)"
              placeholder="Введите название на английском"
              {...form.getInputProps("title.en")}
            />
            <TextInput
              label="Название (uz)"
              placeholder="Введите название на узбекском"
              {...form.getInputProps("title.uz")}
            />

            <TextInput
              label="Описание (ru)"
              placeholder="Введите описание на русском"
              {...form.getInputProps("desc.ru")}
            />
            <TextInput
              label="Описание (en)"
              placeholder="Введите описание на английском"
              {...form.getInputProps("desc.en")}
            />
            <TextInput
              label="Описание (uz)"
              placeholder="Введите описание на узбекском"
              {...form.getInputProps("desc.uz")}
            />
            <DateInput
              label="Дата"
              placeholder="Выберите дату"
              {...form.getInputProps("date")}
            />

            <Group>
              <TimeInput
                label="Время начала"
                placeholder="00:00"
                {...form.getInputProps("startTime")}
              />
              <TimeInput
                label="Время окончания"
                placeholder="00:00"
                {...form.getInputProps("endTime")}
              />
            </Group>

            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={close}>
                Отмена
              </Button>
              <Button type="submit" color="blue">
                {educationId ? "Сохранить" : "Добавить"}
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
