import { Box, Button, Flex, Input, Text } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useNewsStore } from "../../store/useNewsStore";

export const NewPage = () => {
  const { t, i18n } = useTranslation();
  const nav = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { getNewsItem, loading, news } = useNewsStore();
  const currentNews = news.find((item) => item.id === id)

  useEffect(() => {
    if (!news.length) {
      getNewsItem(id!);
    }
  }, [id, news, getNewsItem]);

  if (loading) {
    return (
      <section className="new-page-section">
        <div className="container">
          <Text>Loading...</Text>
        </div>
      </section>
    );
  }

  if (!currentNews) {
    return (
      <section className="new-page-section">
        <div className="container">
          <Text>Новость не найдена</Text>
          <Button mt="md" onClick={() => nav("/news")}>
            {t("newsPage.back")}
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="new-page-section">
      <div className="container">
        <Box className="new-box-pages">
          <Flex className="new-flex-page" direction="column">
            <Button
              variant="outline"
              className="back-to-news"
              onClick={() => nav("/news")}
            >
              {t("newsPage.back")}
            </Button>
            <Text className="new-text-page" size="30px" fw={700}>
              {currentNews.title[i18n.language as "ru" | "en" | "uz"]}
            </Text>

            <Flex className="new-item-page">
              <Box className="inner-item-box-page" flex={1}>
                <img
                  className="new-img"
                  src={currentNews.img}
                  alt={currentNews.title[i18n.language as "ru" | "en" | "uz"]}
                />
                <Text className="new-desc">
                  {currentNews.desc[i18n.language as "ru" | "en" | "uz"]}
                </Text>
              </Box>

              <Box className="related-news">
                <Flex className="reladet-flex" direction="column">
                  <Box className="related-item" flex={1.3}>
                    <Flex direction="column">
                      <Text size="30px">Другие новости</Text>
                      <Box flex={1}>
                        <Flex direction="column" gap="xs">
                          {news
                            .filter((item) => item.id !== currentNews.id)
                            .slice(0, 3)
                            .map((related) => (
                              <Box key={related.id}>
                                <Flex
                                  align="center"
                                  gap="xs"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => nav(`/news/${related.id}`)}
                                >
                                  <img
                                    className="related-image"
                                    src={related.img}
                                    alt={related.title[i18n.language as "ru" | "en" | "uz"]}
                                  />
                                  <Text size="20px">
                                    {related.title[i18n.language as "ru" | "en" | "uz"]}
                                  </Text>
                                </Flex>
                              </Box>
                            ))}
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>

                  <Box className="related-item-2" flex={1}>
                    <Box className="links-box-page" flex={1}>
                      <Text className="description">{t("home.footer.news-desc")}</Text>
                    </Box>
                    <Box className="links-box-page" flex={1}>
                      <Flex direction="column" gap="10px">
                        <Input variant="filled" size="md" radius="xl" placeholder="Email" />
                        <Button type="submit" fullWidth>
                          {t("home.footer.subsc")}
                        </Button>
                      </Flex>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </div>
    </section>
  );
};
