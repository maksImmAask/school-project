import { Accordion, Box, Button, Flex, NavLink, Text } from "@mantine/core"
import { Link1 } from "iconsax-reactjs"
import { useTranslation } from "react-i18next"

export const Questions = () => {
  const { t } = useTranslation()

  const questions = [
    t("questions.faq.1"),
    t("questions.faq.2"),
    t("questions.faq.3"),
    t("questions.faq.4"),
    t("questions.faq.5"),
    t("questions.faq.6"),
    t("questions.faq.7"),
    t("questions.faq.8")
  ]

  const leftLinks = [
    t("support.external.left.links.1"),
    t("support.external.left.links.2"),
    t("support.external.left.links.3"),
    t("support.external.left.links.4"),
  ]

  const rightLinks = [
    t("support.external.right.links.1"),
    t("support.external.right.links.2"),
    t("support.external.right.links.3"),
    t("support.external.right.links.4"),
  ]

  const items = questions.map((item, index) => (
    <Accordion.Item key={index} value={item}>
      <Accordion.Control>{item}</Accordion.Control>
      <Accordion.Panel>
        {t("questions.faqAnswer")}
      </Accordion.Panel>
    </Accordion.Item>
  ))

  return (
    <section className="questions-sect">
      <div className="container">
        <Box className="quest-box">
          <Flex direction="column" gap={'20px'}>
            <Text size="40px">{t("questions.supportTitle")}</Text>
            <Accordion className="accordion">
              {items}
            </Accordion>
            <Box className="inner-box-quest">
              <Flex direction={'column'}>
                <Text size="40px">{t("questions.helpTitle")}</Text>
                <Text>{t("questions.helpDesc")}</Text>
                <Box>
                  <Flex>
                    <Box flex={1} className="question-box-inner">
                      <Text size="30px">{t("questions.meeting.title")}</Text>
                      <Text>{t("questions.meeting.desc")}</Text>
                      <Button className="quest-btn">{t("questions.meeting.btn")}</Button>
                    </Box>
                    <Box flex={1} className="question-box-inner">
                      <Text size="30px">{t("questions.chat.title")}</Text>
                      <Text>{t("questions.chat.desc")}</Text>
                      <Button className="quest-btn">{t("questions.chat.btn")}</Button>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Text size="40px" fw={700}>{t("questions.externalTitle")}</Text>
            <Box>
              <Flex gap={'md'}>
                <Box flex={1} className="link-quest">
                  <Flex direction={'column'}>
                    <Text size="30px">{t("questions.resourcesLeft.title")}</Text>
                    {leftLinks.map((item, idx) => (
                      <NavLink
                        key={idx}
                        href="#"
                        label={item}
                        leftSection={<Link1 size='16' color="var(--mantine-color-blue-6)"/>}
                      />
                    ))}
                  </Flex>
                </Box>
                <Box flex={1} className="link-quest">
                  <Flex direction={'column'}>
                    <Text size="30px">{t("questions.resourcesRight.title")}</Text>
                    {rightLinks.map((item, idx) => (
                      <NavLink
                        key={idx}
                        href="#"
                        label={item}
                        leftSection={<Link1 size='16' color="var(--mantine-color-blue-6)"/>}
                      />
                    ))}
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </div>
    </section>
  )
}
