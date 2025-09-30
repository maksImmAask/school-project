import { useEffect } from "react";
import {
  Table,
  Group,
  Title,
  Loader,
  Center,
  Stack,
} from "@mantine/core";
import { useRulesStore } from "../../../store/useRulesStore";
import { ConfirmDeleteModal } from "../../../shared/ui/confirmDelete";
import { RuleModal } from "./components/rules/addedit";
import { useTranslation } from "react-i18next";

export const RulesPage = () => {
  const { rules, fetchRules, loading, deleteRule } = useRulesStore();
  const { i18n } = useTranslation();

  useEffect(() => {
    fetchRules();
  }, [fetchRules]);

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
        <Title order={2}>Правила</Title>
        <RuleModal />
      </Group>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Заголовок</Table.Th>
            <Table.Th>Описание</Table.Th>
            <Table.Th>Действия</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rules.length > 0 ? (
            rules.map((rule, index) => (
              <Table.Tr key={rule.id}>
                <Table.Td>{index + 1}</Table.Td>
                <Table.Td>{rule.title[i18n.language as "ru" | "en" | "uz"]}</Table.Td>
                <Table.Td>{rule.desc[i18n.language as "ru" | "en" | "uz"]}</Table.Td>
                <Table.Td>
                  <RuleModal ruleId={rule.id} />
                  <ConfirmDeleteModal onConfirm={() => deleteRule(rule.id)} />
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
