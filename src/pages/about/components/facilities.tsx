import { Box, Flex, Text } from "@mantine/core"
import { useFacultiesStore } from "../../../store/useFacultyStore"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"

export const Facilities = () => {
  const {i18n}=useTranslation()
  const {faculties,fetchFaculties}=useFacultiesStore()
  const fourfacul = faculties.slice(0,4)
  useEffect(()=>{
    fetchFaculties()
  }, [fetchFaculties])
  return (
    <>
      <section className="leadership">
        <div className="container">
          <Box className="leadership-box">
            <Text size="40px" fw={700}>Our Facilities</Text>
            <Box className="items-leader">
              <Flex className="leader-flex" gap={'md'}>
                {fourfacul.map((item)=>{
                  return (
                  <Box className="flex-item-leader" flex={1}>
                  <Text className="leader-title">{item.name[i18n.language as "ru"|"uz"|"en"]}</Text>
                  <Text>
                    {item.desc[i18n.language as "ru"|"uz"|"en"]}
                  </Text>
                </Box>
                  )
                })
                }
              </Flex>
            </Box>
          </Box>
        </div>
      </section>
    </>
  )
}
