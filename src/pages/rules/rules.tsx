import { Box, Flex, Text, Accordion, Grid, Button } from "@mantine/core";
import { Document } from "iconsax-reactjs";
import { useTranslation } from "react-i18next";

export const Rules = () => {
  const { t } = useTranslation();

  const rules = [
    "rulesPage.rules.attendance",
    "rulesPage.rules.behavior",
    "rulesPage.rules.integrity",
    "rulesPage.rules.dressCode",
    "rulesPage.rules.technology",
    "rulesPage.rules.healthSafety",
    "rulesPage.rules.extracurricular",
    "rulesPage.rules.communication",
  ];

  const items = rules.map((key, index) => (
    <Accordion.Item key={index} value={t(`${key}.title`)}>
      <Accordion.Control>{t(`${key}.title`)}</Accordion.Control>
      <Accordion.Panel>{t(`${key}.desc`)}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      <section>
        <div className="container">
          <Box>
            <Flex direction="column" gap={"20px"}>
              <Text size="40px" fw={700}>
                {t("rulesPage.title")}
              </Text>
              <Text>{t("rulesPage.desc")}</Text>
              <Box>
                <Flex gap={"20px"}>
                  <Box flex={1} bg={"white"} p={"20px"} bdrs={"20px"}>
                    <Accordion>{items}</Accordion>
                  </Box>
                  <Box
                    bg={"white"}
                    p={"20px"}
                    h={"object-fit"}
                    className="school-hours"
                  >
                    <Text size="30px">{t("rulesPage.hours.title")}</Text>
                    <Box>
                      <Text c={"black"} fw={700}>
                        {t("rulesPage.hours.regular.title")}
                      </Text>
                      <Text>{t("rulesPage.hours.regular.time")}</Text>
                    </Box>
                    <Box>
                      <Text c={"black"} fw={700}>
                        {t("rulesPage.hours.office.title")}
                      </Text>
                      <Text>{t("rulesPage.hours.office.time")}</Text>
                    </Box>
                    <Box>
                      <Text c={"black"} fw={700}>
                        {t("rulesPage.hours.library.title")}
                      </Text>
                      <Text>{t("rulesPage.hours.library.time")}</Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>
              <Text size="40px" fw={700}>
                {t("rulesPage.documents.title")}
              </Text>
              <Box>
                <Flex direction={"column"}>
                  <Grid>
                    <Grid.Col span={4}>
                      <Box className="document-box">
                        <Document
                          size="32"
                          color="var(--mantine-color-blue-6)"
                        />
                        <Box>
                          <Text size="20px" fw={700}>
                            {t("rulesPage.documents.items.charter.title")}
                          </Text>
                          <Text>
                            {t("rulesPage.documents.items.charter.desc")}
                          </Text>
                          <Button variant="outline">
                            {t("rulesPage.documents.download")}
                          </Button>
                        </Box>
                      </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Box className="document-box">
                        <Document
                          size="32"
                          color="var(--mantine-color-blue-6)"
                        />
                        <Box>
                          <Text size="20px" fw={700}>
                            {t("rulesPage.documents.items.handbook.title")}
                          </Text>
                          <Text>
                            {t("rulesPage.documents.items.handbook.desc")}
                          </Text>
                          <Button variant="outline">
                            {t("rulesPage.documents.download")}
                          </Button>
                        </Box>
                      </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Box className="document-box">
                        <Document
                          size="32"
                          color="var(--mantine-color-blue-6)"
                        />
                        <Box>
                          <Text size="20px" fw={700}>
                            {t("rulesPage.documents.items.parent.title")}
                          </Text>
                          <Text>
                            {t("rulesPage.documents.items.parent.desc")}
                          </Text>
                          <Button variant="outline">
                            {t("rulesPage.documents.download")}
                          </Button>
                        </Box>
                      </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Box className="document-box">
                        <Document
                          size="32"
                          color="var(--mantine-color-blue-6)"
                        />
                        <Box>
                          <Text size="20px" fw={700}>
                            {t("rulesPage.documents.items.calendar.title")}
                          </Text>
                          <Text>
                            {t("rulesPage.documents.items.calendar.desc")}
                          </Text>
                          <Button variant="outline">
                            {t("rulesPage.documents.download")}
                          </Button>
                        </Box>
                      </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Box className="document-box">
                        <Document
                          size="32"
                          color="var(--mantine-color-blue-6)"
                        />
                        <Box>
                          <Text size="20px" fw={700}>
                            {t("rulesPage.documents.items.enrollment.title")}
                          </Text>
                          <Text>
                            {t("rulesPage.documents.items.enrollment.desc")}
                          </Text>
                          <Button variant="outline">
                            {t("rulesPage.documents.download")}
                          </Button>
                        </Box>
                      </Box>
                    </Grid.Col>
                  </Grid>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </div>
      </section>
    </>
  );
};
