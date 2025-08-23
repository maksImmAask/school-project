import { Flex, Box, Text, Button,  } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from 'react-i18next';
export const About = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(min-width: 480px)');
  return (
    <>
      <section className="about-section">
        <div className="container">
          <Box className="about-box">
            <Flex direction={isMobile ? 'column' : 'row'} className="about-flex" justify="space-between" align="center" gap="md">
              <Box flex={1} className="about-content">
                <Flex direction={'column'} className="about-content-flex" gap="md">
                  <Box flex={1}>
                    <Flex direction={'column'} className="about-header-flex" gap="md">
                      <Box flex={1}>
                      </Box>
                      <Box flex={1} className="about-title">
                        <Text className="title-about" size="30px" fw={700} c="blue">
                          {t("home.fourth-section.about-school")}
                        </Text>
                        <Text className="description-about">
                          {t("home.fourth-section.about_desc")}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                  <Box flex={1}>
                    <Flex className="about-items-flex" direction={'column'}>
                      <Box flex={4}>
                        <Flex className="about-item-flex">
                          <Box  flex={1}>
                            <Flex className="about-item" direction={'column'} gap="md">
                              <Box flex={1} className="about-item-title">
                                <Text className="about-item-text">500+</Text>
                                <Text className="about-item-description">{t("home.fourth-section.students")}</Text>
                              </Box>
                              <Box flex={1} className="about-item-title">
                                <Text className="about-item-text">50+</Text>
                                <Text className="about-item-description">{t("home.fourth-section.teachers")}</Text>
                              </Box>
                            </Flex>
                          </Box>
                          <Box flex={1}>
                            <Flex className="about-item" direction={'column'} gap="md">
                              <Box flex={1} className="about-item-title">
                                <Text className="about-item-text">20+</Text>
                                <Text className="about-item-description">{t("home.fourth-section.class")}</Text>
                              </Box>
                              <Box flex={1} className="about-item-title">
                                <Text className="about-item-text">25+</Text>
                                <Text className="about-item-description">{t("home.fourth-section.years")}</Text>
                              </Box>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                      <Box flex={1}>
                          <Button className="btn-filled">{t("home.first-section.more-btn")}</Button>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box flex={1.4} className="about-content">
                <Flex direction={'column'} className="about-content-item-flex">
                  <Box >
                    <Text className="title">{t("home.fourth-section.events")}</Text>
                  </Box>
                  <Box flex={6}>
                    <Flex direction={'column'} className="event-item-flex">
                      <Box className="event-item">
                        <Flex direction={'column'} className="event-item-flex">
                          <Text className="title" flex={1}>{t("home.fourth-section.event1")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event1date")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event1time")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event1desc")}</Text>
                        </Flex>
                      </Box>
                      <Box className="event-item">
                        <Flex direction={'column'} className="event-item-flex">
                          <Text className="title" flex={1}>{t("home.fourth-section.event2")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event2date")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event2time")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event2desc")}</Text>
                        </Flex>
                      </Box>
                      <Box className="event-item">
                        <Flex direction={'column'} className="event-item-flex">
                          <Text className="title" flex={1}>{t("home.fourth-section.event3")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event3date")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event3time")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event3desc")}</Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                  <Box flex={1}>
                    <Button className="event-btn" variant="outline" fullWidth>{t("home.fourth-section.all-events")}</Button>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </div>
      </section>
    </>
  )
}