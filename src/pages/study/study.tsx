import { Box, Flex, Grid, NavLink, Text } from "@mantine/core";
import { useEducationStore } from "../../store/useEducationStore";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const Study = () => {
  const { t, i18n } = useTranslation();
  const {educations,fetchEducations}=useEducationStore()
  const sixedu = educations.slice(0,6)
  useEffect(()=>{
    fetchEducations()
  }, [fetchEducations])
  return (
    <>
     <section className="study-section">
      <div className="container">
        <Box className="study-box">
          <Flex className="study-flex" direction='column' gap={'20px'}>
            <Text size="40px" fw={700}>{t("study.title")}</Text>
            <Text>{t("study.desc")}</Text>
            <Box className="item-study" flex={1}>
              <Flex className="item-flex-study" direction={'column'}>
                <Text size="30px">{t("study.extracurricular")}</Text>
                <Box flex={1}>
                  <Grid>
                    {sixedu.map((item)=>{
                      return (
                      <Grid.Col span={4}>
                        <Box className="item-study-box" flex={1}>
                          <Text size="20px" fw={700}>{item.title[i18n.language as "ru"|"en"|"uz"]}</Text>
                          <Text>{item.desc[i18n.language as "ru"|"en"|"uz"]}</Text>
                          <NavLink href="#" label={item.date} />
                        </Box>
                      </Grid.Col>
                      )
                    })}
                  </Grid>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </div>
     </section>
    </>
  );
}
