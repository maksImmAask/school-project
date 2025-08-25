import {Box, Flex, Text, Button } from '@mantine/core'
import { Calendar, Blogger, Profile2User, Book } from "iconsax-reactjs";
import { useTranslation } from 'react-i18next';
export const Lastnews = () => {
  const { t} = useTranslation()
  return (
    <>
      <section className="last-news">
        <div className="container">
          <Box className="news-box">
            <Flex className="news-flex" justify="space-between" align="center" gap="md">
              <Box flex={2} className="news-content">
                <Flex className="news-content-flex" direction={'column'}>
                  <Box flex={0.1} className="header-news">
                    
                    <Text size="30px" fw={700} c="blue">
                      {t("home.second-section.last-news")}
                    </Text>
                    
                    <Button justify='flex-end' ml={'auto'} variant='outline'>{t("home.second-section.all-btn")}</Button>

                  </Box>
                  <Box flex={2} className="news-item-box">
                    <Flex direction={'column'} className="news-item-flex" gap="md">
                      <Box flex={1} className="news-item">
                        <Flex className="news-text-flex">
                          <Box flex={1} className='img-box-item' ><img className='img-news' src="https://avatars.mds.yandex.net/i?id=160309fe7cfc3fc3402538983f654eab8ff6c3cd-16340611-images-thumbs&n=13" alt="" /></Box>
                          <Box flex={2} className='box-image-flex'>
                            <Flex direction={'column'} className='flex-text-box-item'>
                              <Box flex={0.5}>
                                <Text className="data"  c={'gray'} fs={'5px'}>
                                  <Calendar size="16" color="gray"/>
                                   {t("home.second-section.date")}
                                </Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="title">{t("home.second-section.news-1")}</Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="description">
                                  {t("home.second-section.new-1-desc")}
                                </Text>
                              </Box>
                              <Button>{t("home.first-section.more-btn")}</Button>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                      <Box flex={1} className="news-item">
                        <Flex className="news-text-flex">
                          <Box flex={1} className='img-box-item' ><img className='img-news' src="https://avatars.mds.yandex.net/i?id=20a8adbe445d157f60d323267062dbc1e859b7f2-5026103-images-thumbs&n=13" alt="" /></Box>
                          <Box flex={2} className='box-image-flex'>
                            <Flex direction={'column'} className='flex-text-box-item'>
                              <Box flex={0.5}>
                                <Text className="data"  c={'gray'} fs={'5px'}>
                                  <Calendar size="16" color="gray"/>
                                   {t("home.second-section.date2")}
                                </Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="title">{t("home.second-section.new-2")}</Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="description">
                                  {t("home.second-section.new-2-desc")}
                                </Text>
                              </Box>
                              <Button>{t("home.first-section.more-btn")}</Button>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                      <Box flex={1} className="news-item">
                        <Flex className="news-text-flex">
                          <Box flex={1}  className='img-box-item'><img src="https://avatars.mds.yandex.net/i?id=aa3ac368a7c23f3ca455ad76f2a2aa6438b6c799-5583511-images-thumbs&n=13" alt="" className="img-news" /></Box>
                          <Box flex={2} className='box-image-flex'>
                            <Flex direction={'column'} className='flex-text-box-item'>
                              <Box flex={0.5}>
                                <Text className="data"  c={'gray'} fs={'5px'}>
                                  <Calendar size="16" color="gray"/>
                                   {t("home.second-section.date3")}
                                </Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="title">{t("home.second-section.new-3")}</Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="description">
                                  {t("home.second-section.new-3-desc")}
                                </Text>
                              </Box>
                              <Button>{t("home.first-section.more-btn")}</Button>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box flex={1} className="news-links">
                <Flex direction={'column'} className="news-links-flex" gap="md">
                  <Box flex={0.1} className="header-links">
                    <Flex >
                    <Text className="title-link">{t("home.second-section.fast-link")}</Text>
                    </Flex>
                  </Box>

                  <Box flex={1} className='content-links'>
                    <Flex direction={"column"} className='flex-item-link'>
                      <Box className="link-box-item" flex={1}>
                        <Flex direction={'column'} gap={'lg'}>
                          <Box flex={1} className="link-item">
                              <Box flex={1} className="link-icon">
                                <Calendar size={32} color="var(--mantine-color-blue-6)"/>
                              </Box>
                              <Box flex={2} className="link-text">
                                {t("home.second-section.fast-link1")}
                              </Box>
                          </Box>
                          <Box flex={1} className="link-item">
                              <Box flex={1} className="link-icon">
                                <Blogger size={32} color="var(--mantine-color-blue-6)"/>
                              </Box>
                              <Box flex={2} className="link-text">
                                {t("home.second-section.fast-link2")}
                              </Box>
                          </Box>
                          <Box flex={1} className="link-item">
                              <Box flex={1} className="link-icon">
                                <Profile2User size={32} color="var(--mantine-color-blue-6)"/>
                              </Box>
                              <Box flex={2} className="link-text">
                                {t("home.second-section.fast-link3")}
                              </Box>
                          </Box>
                          <Box flex={1} className="link-item">
                              <Box flex={1} className="link-icon">
                                <Book size={32} color="var(--mantine-color-blue-6)"/>
                              </Box>
                              <Box flex={2} className="link-text">
                                {t("home.second-section.fast-link4")}
                              </Box>
                          </Box>
                        </Flex>
                      </Box>
                      <Box flex={1} className="empty-link"></Box>
                    </Flex>
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