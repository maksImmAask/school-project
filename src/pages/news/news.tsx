import { Box, Flex , Text, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const News = () => {
  const nav = useNavigate()
  const { t } = useTranslation()

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
                    <Flex className="inner-flex-item" gap={'md'}>
                      <Box className="new-box-page" flex={1}>
                        <Flex className="inner-item-flex-page" direction={'column'}>
                          <Box flex={1} className="image-box-item">
                            <img src="https://avatars.mds.yandex.net/i?id=5b49ff2afa157f22dc2fbbc5b9fc4eee519f7d89-8427413-images-thumbs&n=13" alt="image" className="image-box-item-inner" />
                          </Box>
                          <Box flex={1}>
                            <Text>{t("newsPage.items.0.date")}</Text>
                            <Text size="30px" c={'black'} fw={700}>{t("newsPage.items.0.title")}</Text>
                            <Text>{t("newsPage.items.0.desc")}</Text>
                            <Button variant="outline" onClick={()=>{nav('/new')}}>{t("newsPage.items.0.button")}</Button>
                          </Box>
                        </Flex>
                      </Box>
                      <Box className="new-box-page" flex={1}>
                        <Flex className="inner-item-flex-page" direction={'column'}>
                          <Box flex={1} className="image-box-item">
                            <img src="https://avatars.mds.yandex.net/i?id=ffdf929885dbb9107d766d44e8cdf8af-5235644-images-thumbs&n=13" alt="image" className="image-box-item-inner" />
                          </Box>
                          <Box flex={1}>
                            <Text>{t("newsPage.items.1.date")}</Text>
                            <Text size="30px" c={'black'} fw={700}>{t("newsPage.items.1.title")}</Text>
                            <Text>{t("newsPage.items.1.desc")}</Text>
                            <Button variant="outline" onClick={()=>{nav('/new')}}>{t("newsPage.items.1.button")}</Button>
                          </Box>
                        </Flex>
                      </Box>
                      <Box className="new-box-page" flex={1}>
                        <Flex className="inner-item-flex-page" direction={'column'}>
                          <Box flex={1} className="image-box-item">
                            <img src="https://avatars.mds.yandex.net/i?id=84e412fcbaa3cef4e09ebdfa1541a76f6cc5a1ed-10331033-images-thumbs&n=13" alt="image" className="image-box-item-inner" />
                          </Box>
                          <Box flex={1}>
                            <Text>{t("newsPage.items.2.date")}</Text>
                            <Text size="30px" c={'black'} fw={700}>{t("newsPage.items.2.title")}</Text>
                            <Text>{t("newsPage.items.2.desc")}</Text>
                            <Button variant="outline" onClick={()=>{nav('/new')}}>{t("newsPage.items.2.button")}</Button>
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                  <Box className="news-page-item" flex={1}>
                    <Flex className="inner-flex-item" gap={'md'}>
                      <Box className="new-box-page" flex={1}>
                        <Flex className="inner-item-flex-page" direction={'column'}>
                          <Box flex={1} className="image-box-item">
                            <img src="https://avatars.mds.yandex.net/i?id=f7d17e8e3fcb0d8f85db7d65481279bcbda94367-5236812-images-thumbs&n=13" alt="image" className="image-box-item-inner" />
                          </Box>
                          <Box flex={1}>
                            <Text>{t("newsPage.items.3.date")}</Text>
                            <Text size="30px" c={'black'} fw={700}>{t("newsPage.items.3.title")}</Text>
                            <Text>{t("newsPage.items.3.desc")}</Text>
                            <Button variant="outline" onClick={()=>{nav('/new')}}>{t("newsPage.items.3.button")}</Button>
                          </Box>
                        </Flex>
                      </Box>
                      <Box className="new-box-page" flex={1}>
                        <Flex className="inner-item-flex-page" direction={'column'}>
                          <Box flex={1} className="image-box-item">
                            <img src="https://avatars.mds.yandex.net/i?id=5b49ff2afa157f22dc2fbbc5b9fc4eee519f7d89-8427413-images-thumbs&n=13" alt="image" className="image-box-item-inner" />
                          </Box>
                          <Box flex={1}>
                            <Text>{t("newsPage.items.4.date")}</Text>
                            <Text size="30px" c={'black'} fw={700}>{t("newsPage.items.4.title")}</Text>
                            <Text>{t("newsPage.items.4.desc")}</Text>
                            <Button variant="outline" onClick={()=>{nav('/new')}}>{t("newsPage.items.4.button")}</Button>
                          </Box>
                        </Flex>
                      </Box>
                      <Box className="new-box-page" flex={1}>
                        <Flex className="inner-item-flex-page" direction={'column'}>
                          <Box flex={1} className="image-box-item">
                            <img src="https://avatars.mds.yandex.net/i?id=302b5806b4a8ce903aed8c42f887cd33375157a6-5354201-images-thumbs&n=13" alt="image" className="image-box-item-inner" />
                          </Box>
                          <Box flex={1}>
                            <Text>{t("newsPage.items.5.date")}</Text>
                            <Text size="30px" c={'black'} fw={700}>{t("newsPage.items.5.title")}</Text>
                            <Text>{t("newsPage.items.5.desc")}</Text>
                            <Button variant="outline" onClick={()=>{nav('/new')}}>{t("newsPage.items.5.button")}</Button>
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
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
