import { Box, Flex, Text, Grid , Image} from '@mantine/core';
import { useEffect } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { useTeachersStore } from '../../../../store/useTeachersStore';
import i18n from '../../../../l18next';

export const Teachers = () => {
  const { teachers, fetchTeachers } = useTeachersStore();

  useEffect(() => {
    fetchTeachers();
  }, [fetchTeachers]);

  const { t } = useTranslation();
  const isMobile = useMediaQuery('(min-width: 480px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  const teacherthree = teachers.slice(0, 4);

  return (
    <section className="teachers">
      <div className="container">
        <Box className="teachers-box">
          <Flex direction="column" className="teachers-flex">
            <Box
              className="teachers-header"
              flex={isTablet ? 0.1 : isMobile ? 0.1 : 1}
            >
              <Text className="title-teachers">{t('header.about')}</Text>
              <Text className="description">
                {t('home.third-section.teachers-desc')}
              </Text>
            </Box>

            <Box className="teachers-items" flex={2}>
              <Flex
                direction={isTablet ? 'row' : 'column'}
                className="teachers-items-flexs"
                gap="md"
              >
                <Box className="teachers-item-teacher" flex={1}>
                  <Grid className="item-teacher-flex">
                    {teacherthree.map((item) => (
                      <Grid.Col span={6} key={item.id}>
                        <Box className="teacher" flex={1}>
                          <Flex
                            direction="column"
                            className="teacher-item-flex"
                          >
                            <Box flex={3}>
                              <Image
                              
                                src={item.avatar}
                                alt={item.firstName[i18n.language as 'ru' | 'en' | 'uz']}
                                className="img-news"
                              />
                            </Box>
                            <Box flex={1} className="teacher-name">
                              <Text className="teacher-title">
                                {item.firstName[i18n.language as 'ru' | 'en' | 'uz']}
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </Grid.Col>
                    ))}
                  </Grid>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </div>
    </section>
  );
};
