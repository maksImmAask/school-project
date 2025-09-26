import { Box, Flex, Text } from "@mantine/core"
import { useOwnersStore } from "../../../store/useOwnersStore"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"

export const Leadership = () => {
  const { t, i18n } = useTranslation()
  const {fetchOwners,owners}=useOwnersStore()
  const sliceowners = owners.slice(0,3)
  useEffect(()=>{
    fetchOwners()
  },[fetchOwners])
  return (
    <section className="leadership">
      <div className="container">
        <Box className="leadership-box">
          <Text size="40px" fw={700}>
            {t("about.leadership.title")}
          </Text>
          <Box className="items-leader">
            <Flex className="leader-flex" gap="md">
              {sliceowners.map((item)=>{
                return (
                  <>
              <Box className="flex-item-leader" flex={1}>
                <Text className="leader-title">
                  {item.name[i18n.language as "ru" | "en"| "uz"]}
                </Text>
                <Text>{item.desc[i18n.language as "ru" | "en"| "uz"]}</Text>
              </Box>
                  </>
                )
              })}
            </Flex>
          </Box>
        </Box>
      </div>
    </section>
  )
}
