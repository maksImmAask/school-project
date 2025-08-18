import { Flex, Box,Text, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Calendar, Blogger, Profile2User, Book } from "iconsax-reactjs";
const Home = () => {
  const isTablet = useMediaQuery('(max-width: 768px)');
  const isMobile = useMediaQuery('(max-width: 480px)')
  return (
    <>
      <section className="section">
        <div className="container">
          <Box className="home-box">
            <Flex className="home-flex" justify="center" align="center" gap='md' >

              <Box flex={1} className="bg-img"> Тут будет картина </Box>
              <Box flex={1}>
                <Flex direction={'column'}>
                  <Box>
                    <Text className="title title-home" size="60px" fw={900} c="blue">
                      Добро пожаловать в нашу школу
                    </Text>
                  </Box>
                  <Box>
                    <Box>
                      <Text>Место, где знания встречаются с инновациями, а
ученики готовятся к вызовам завтрашнего дня.</Text>
                    </Box>
                    <Box>
                      <Flex gap="md" justify="flex-start" align="center" mt="md">
                      <Button>Связаться с нами</Button>
                      <Button variant="outline">Узнать Больше</Button>
                      </Flex>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </div>
      </section>
      <section className="last-news">
        <div className="container">
          <Box className="news-box">
            <Flex className="news-flex" direction={isTablet ? 'column' : 'row'} justify="space-between" align="center" gap="md">
              <Box flex={2} className="news-content">
                <Flex className="news-content-flex" direction={'column'}>
                  <Box flex={0.1} className="header-news">
                    <Flex>
                    <Box flex={3}>
                      <Text className="title-news" size="30px" fw={700} c="blue">
                        Последние новости
                      </Text>
                    </Box>
                    <Box flex={1} ></Box>
                    <Box flex={1}><Button className="btn-all">Смотреть все</Button></Box>
                    </Flex>
                  </Box>
                  <Box flex={1} className="news-item-box">
                    <Flex direction={'column'} className="news-item-flex" gap="md">
                      <Box flex={1} className="news-item">
                        <Flex className="news-text-flex">
                          <Box flex={1} >Тут будет картина</Box>
                          <Box flex={2}>
                            <Flex direction={'column'}>
                              <Box flex={0.5}>
                                <Text className="data"  c={'gray'} fs={'5px'}>
                                  <Calendar size="16" color="gray"/>
                                   5 мая 2025
                                </Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="title">Объявлены победители школьной олимпиады</Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="description">
                                  Поздравляем всех участников и победителей нашей
ежегодной школьной олимпиады.
                                </Text>
                              </Box>
                              <Button>Читать дальше</Button>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                      <Box flex={1} className="news-item">
                        <Flex className="news-text-flex">
                          <Box flex={1} >Тут будет картина</Box>
                          <Box flex={2}>
                            <Flex direction={'column'}>
                              <Box flex={0.5}>
                                <Text className="data"  c={'gray'} fs={'5px'}>
                                  <Calendar size="16" color="gray"/>
                                   28 апреля 2025
                                </Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="title">Открытие нового компьютерного класса</Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="description">
                                  Мы рады сообщить об открытии нашей новой современной
компьютерной лаборатории.
                                </Text>
                              </Box>
                              <Button>Читать дальше</Button>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                      <Box flex={1} className="news-item">
                        <Flex className="news-text-flex">
                          <Box flex={1} >Тут будет картина</Box>
                          <Box flex={2}>
                            <Flex direction={'column'}>
                              <Box flex={0.5}>
                                <Text className="data"  c={'gray'} fs={'5px'}>
                                  <Calendar size="16" color="gray"/>
                                   15 апреля 2025
                                </Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="title">Расписание родительских собраний</Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="description">
                                  Опубликовано расписание предстоящих родительских
собраний.
                                </Text>
                              </Box>
                              <Button>Читать дальше</Button>
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
                    <Text className="title-link">Быстрые ссылки</Text>
                    </Flex>
                  </Box>

                  <Box flex={1}>
                    <Flex direction={"column"}>
                      <Box className="link-box-item" flex={1}>
                        <Flex direction={'column'} gap={'lg'}>
                          <Box flex={1} className="link-item">
                              <Box flex={1} className="link-icon">
                                <Calendar size={32} />
                              </Box>
                              <Box flex={2} className="link-text">
                                Расписание уроков
                              </Box>
                          </Box>
                          <Box flex={1} className="link-item">
                              <Box flex={1} className="link-icon">
                                <Blogger size={32} />
                              </Box>
                              <Box flex={2} className="link-text">
                                Школьные документы
                              </Box>
                          </Box>
                          <Box flex={1} className="link-item">
                              <Box flex={1} className="link-icon">
                                <Profile2User size={32} />
                              </Box>
                              <Box flex={2} className="link-text">
                                Наши учителя
                              </Box>
                          </Box>
                          <Box flex={1} className="link-item">
                            
                              <Box flex={1} className="link-icon">
                                <Book size={32} />
                              </Box>
                              <Box flex={2} className="link-text">
                                Доступные курсы
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
      <section className="teachers">
        <div className="container">
          <Box className="teachers-box">
            <Flex direction={'column'} className="teachers-flex">
              <Box className="teachers-header " flex={isTablet ? 0.1 : 1}>
                <Text className="title-teachers">Our Teachers</Text>
                <Text className="description">Meet our dedicated team of educators committed to providing the highest quality
education and support for our students.</Text>
              </Box>
              <Box className="teachers-items" flex={2}>
                <Flex direction={isTablet ? 'column' : 'row'} className="teachers-items-flexs" gap={'md'}>
                  <Box className="teachers-item-teacher" flex={1}>
                    <Flex className="item-teacher-flex" direction={isMobile ? 'column' : 'row'} gap={'md'}>
                      <Box className="teacher" flex={1}>
                        <Flex direction={'column'} className="teacher-item-flex">
                          <Box flex={3}>
                            Тут будет картина
                          </Box>
                          <Box flex={1} className="teacher-name">
                            <Text className="teacher-title">DR Sarah Johnson</Text>
                          </Box>
                        </Flex>
                      </Box>
                      <Box className="teacher" flex={1}>
                        <Flex direction={'column'} className="teacher-item-flex">
                          <Box flex={3}>Тут будет картина</Box>
                          <Box flex={1} className="teacher-name"> <Text className="teacher-title">Prof. Michael Chen</Text></Box>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                  <Box className="teachers-item-teacher" flex={1}>
                    <Flex className="item-teacher-flex" direction={isMobile ? 'column' : 'row'} gap={'md'}>
                      <Box className="teacher" flex={1}>
                        <Flex direction={'column'} className="teacher-item-flex">
                          <Box flex={3}>
                            Тут будет картина
                          </Box>
                          <Box flex={1} className="teacher-name">
                            <Text className="teacher-title">Dr. Emily Rodriguez</Text>
                          </Box>
                        </Flex>
                      </Box>
                      <Box className="teacher" flex={1}>
                        <Flex direction={'column'} className="teacher-item-flex">
                          <Box flex={3}>Тут будет картина</Box>
                          <Box flex={1} className="teacher-name">
                            <Text className="teacher-title">Prof. David Kim</Text>
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
export default Home;