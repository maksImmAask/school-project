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
import { useRulesStore } from "../../../../../store/useRulesStore";

interface RuleModalProps {
  ruleId?: string | null;
}

const INITIAL_VALUES = {
  title: { ru: "", en: "", uz: "" },
  desc: { ru: "", en: "", uz: "" },
};

export const RuleModal = ({ ruleId }: RuleModalProps) => {
  const { addRule, updateRule, getRule } = useRulesStore();

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
    },
  });

  useEffect(() => {
    if (opened && ruleId) {
      const fetchRule = async () => {
        const rule = await getRule(ruleId);
        if (rule) {
          form.setValues({
            title: rule.title,
            desc: rule.desc,
          });
        }
      };
      fetchRule();
    } else if (opened && !ruleId) {
      form.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, ruleId, getRule]);

  const handleSubmit = form.onSubmit(async (values) => {
    if (ruleId) {
      await updateRule(ruleId, values);
    } else {
      await addRule(values);
    }
    close();
  });

  return (
    <>
      <Button
        variant={ruleId ? "light" : "filled"}
        onClick={open}
      >
        {ruleId ? "Редактировать" : "Добавить правило"}
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        title={ruleId ? "Редактировать правило" : "Добавить правило"}
        centered
        size="md"
      >
        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              label="Имя (ru)"
              placeholder="Введите имя на русском"
              {...form.getInputProps("title.ru")}
            />
            <TextInput
              label="Имя (en)"
              placeholder="Введите имя на английском"
              {...form.getInputProps("title.en")}
            />
            <TextInput
              label="Имя (uz)"
              placeholder="Введите имя на узбекском"
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

            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={close}>
                Отмена
              </Button>
              <Button type="submit" color="blue">
                {ruleId ? "Сохранить" : "Добавить"}
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
