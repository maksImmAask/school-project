import {Box, Flex, Text, Button, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Calendar, Blogger, Profile2User, Book } from "iconsax-reactjs";
import { useTranslation } from 'react-i18next';
import { useNewsStore } from '../../../../store/useNewsStore';
import { useEffect } from 'react';
import i18n from '../../../../l18next';
export const Lastnews = () => {
  const { t} = useTranslation()
  const isMobile = useMediaQuery('(min-width: 480px)');
  const isNotebook = useMediaQuery('(min-width: 1024px)')
  const {news, fetchNews} = useNewsStore()
  useEffect (()=>{
    fetchNews()
  }, [fetchNews])
  const latestthree = news.slice(0,3)
  const newsitem = latestthree.map((item)=>{
    return (
      <>
                      <Box flex={1} className="news-item">
                        <Flex className="news-text-flex" direction={isMobile ? 'row' :'column'}>
                          <Box flex={1} className='img-box-item' ><Image w={"100%"}  h={"100%"} src={item.img} alt="" /></Box>
                          <Box flex={2} className='box-image-flex'>
                            <Flex direction={'column'} className='flex-text-box-item'>
                              <Box flex={0.5}>
                                <Text className="data"  c={'gray'} fs={'5px'}>
                                  <Calendar size="16" color="gray"/>
                                   {item.date}
                                </Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="title">{item.title[i18n.language as "ru" | "en" | "uz"]}</Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="description">
                                  {item.desc[i18n.language as "ru" | "en" | "uz"]}
                                </Text>
                              </Box>
                              <Button>{t("home.first-section.more-btn")}</Button>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
      </>
    )
  })
  const isLargeNotebook = useMediaQuery('(min-width: 1440px)')
  return (
    <>
      <section className="last-news">
        <div className="container">
          <Box className="news-box">
            <Flex className="news-flex" direction={isLargeNotebook ? 'row' : ( isNotebook ? 'row':'column')} justify="space-between" align="center" gap="md">
              <Box flex={isMobile ? 4 : 2} className="news-content">
                <Flex className="news-content-flex" direction={'column'}>
                  <Box flex={0.1} className="header-news">
                    <Flex>
                    <Box flex={3}>
                      <Text className="title-news" size="30px" fw={700} c="blue">
                        {t("home.second-section.last-news")}
                      </Text>
                    </Box>
                    <Box flex={1} ></Box>
                    <Box flex={1}><Button className="btn-all">{t("home.second-section.all-btn")}</Button></Box>
                    </Flex>
                  </Box>
                  <Box flex={2} className="news-item-box">
                    <Flex direction={'column'} className="news-item-flex" gap="md">
                      {newsitem}
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

                  <Box flex={1}>
                    <Flex direction={"column"}>
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