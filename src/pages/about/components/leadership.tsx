import { Box, Flex, Text } from "@mantine/core"
import { Book, Medal, Profile2User } from "iconsax-reactjs"
import { useTranslation } from "react-i18next"

export const Leadership = () => {
  const { t } = useTranslation()

  return (
    <section className="leadership">
      <div className="container">
        <Box className="leadership-box">
          <Text size="40px" fw={700}>
            {t("about.leadership.title")}
          </Text>
          <Box className="items-leader">
            <Flex className="leader-flex" gap="md">
              <Box className="flex-item-leader" flex={1}>
                <Profile2User className="icon-leader" size="80" color="var(--mantine-color-blue-6)" />
                <Text className="leader-title">
                  {t("about.leadership.members.0.name")}
                </Text>
                <Text>{t("about.leadership.members.0.role")}</Text>
                <Text>{t("about.leadership.members.0.desc")}</Text>
              </Box>

              <Box className="flex-item-leader" flex={1}>
                <Book className="icon-leader" size="80" color="var(--mantine-color-blue-6)" />
                <Text className="leader-title">
                  {t("about.leadership.members.1.name")}
                </Text>
                <Text>{t("about.leadership.members.1.role")}</Text>
                <Text>{t("about.leadership.members.1.desc")}</Text>
              </Box>

              <Box className="flex-item-leader" flex={1}>
                <Medal className="icon-leader" size="80" color="var(--mantine-color-blue-6)" />
                <Text className="leader-title">
                  {t("about.leadership.members.2.name")}
                </Text>
                <Text>{t("about.leadership.members.2.role")}</Text>
                <Text>{t("about.leadership.members.2.desc")}</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </div>
    </section>
  )
}
