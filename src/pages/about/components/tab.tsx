import { Tabs, Box, Text } from "@mantine/core"
import { useTranslation } from "react-i18next"

export const Tab = () => {
  const { t } = useTranslation()

  return (
    <section className="tab-section">
      <div className="container">
        <Tabs variant="pills" radius="lg" defaultValue="mission" className="tab">
          <Tabs.List className="tab-list">
            <Tabs.Tab value="mission">
              {t("about.tabs.mission.title")}
            </Tabs.Tab>
            <Tabs.Tab value="history">
              {t("about.tabs.history.title")}
            </Tabs.Tab>
            <Tabs.Tab value="values">
              {t("about.tabs.values.title")}
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="mission" className="tab-item">
            <Box className="tab-box">
              <Text size="40px" fw={700}>
                {t("about.tabs.mission.title")}
              </Text>
              <Text className="description" size="20px">
                {t("about.tabs.mission.missionText")}
              </Text>
              <Text className="description" size="20px">
                {t("about.tabs.mission.visionText")}
              </Text>
            </Box>
          </Tabs.Panel>

          <Tabs.Panel value="history" className="tab-item">
            <Box className="tab-box">
              <Text size="40px" fw={700}>
                {t("about.tabs.history.title")}
              </Text>
              <Text className="description" size="20px">
                {t("about.tabs.history.text")}
              </Text>
            </Box>
          </Tabs.Panel>

          <Tabs.Panel value="values" className="tab-item">
            <Box className="tab-box">
              <Text size="40px" fw={700}>
                {t("about.tabs.values.title")}
              </Text>
              <Text className="description" size="20px">
                {t("about.tabs.values.text")}
              </Text>
            </Box>
          </Tabs.Panel>
        </Tabs>
      </div>
    </section>
  )
}
