import { Box, Flex , Text, Button, Grid } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useNewsStore } from "../../store/useNewsStore";
import { useEffect } from "react";

export const News = () => {
  const nav = useNavigate()
  const {news,fetchNews}= useNewsStore()
  const { t , i18n} = useTranslation()
  useEffect(()=>{
    fetchNews()
  }, [fetchNews])
  const sixnews = news.slice(0,6)
  return (
    <>
      <section className="news-page-section">
        <div className="container">
          <Box className="news-box-page">
            <Flex className="news-page-flex" gap={'lg'} direction={'column'}>
              <Box className="news-item-box" flex={0.2}>
                <Text size="40px" fw={700}>{t("newsPage.title")}</Text>
                <Text>{t("newsPage.desc")}</Text>
              </Box>
              <Box className="flex-box-item-page" flex={2}>
                <Flex className="news-page-flex" direction={'column'} gap={'md'}>
                  <Box className="news-page-item" flex={1} >
                    <Grid className="inner-flex-item">
                      {sixnews.map((item)=>{
                        return (
                        <Grid.Col span={4}>
                          <Box className="new-box-page" flex={1}>
                            <Flex className="inner-item-flex-page" direction={'column'}>
                              <Box flex={1} className="image-box-item">
                                <img src={item.img} alt="image" className="image-box-item-inner" />
                              </Box>
                              <Box flex={1}>
                                <Text>{item.date}</Text>
                                <Text size="30px" c={'black'} fw={700}>{item.title[i18n.language as "ru" | "en" | "uz"]}</Text>
                                <Text>{item.desc[i18n.language as "ru" | "en" | "uz"]}</Text>
                                <Button
                                  variant="outline"
                                  onClick={() => nav(`/news/${item.id}`)}
                                >
                                  {t("newsPage.items.0.button")}
                                </Button>
                              </Box>
                            </Flex>
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
