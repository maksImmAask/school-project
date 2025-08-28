import { Box, Flex, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'

export const WelcomeAbout = () => {
  const { t } = useTranslation()

  return (
    <section className="about-welcome">
      <div className="container">
        <Box className="welcome-about-box">
          <Flex className="about-welcome-flex">
            <Box flex={1} className="welcome-about-item">
              <Text fw={700} size="40px" className="title">
                {t('about.welcome.title')}
              </Text>
              <Text className="description">
                {t('about.welcome.desc1')}
              </Text>
              <Text className="description">
                {t('about.welcome.desc2')}
              </Text>
            </Box>
            <Box flex={1} className="welcome-about-item">
              <img
                className="img-about"
                src="https://avatars.mds.yandex.net/i?id=424e4f4a9c5b665669205af0043679f5df17ebb7-5273845-images-thumbs&n=13"
                alt={t('about.welcome.image-alt')}
              />
            </Box>
          </Flex>
        </Box>
      </div>
    </section>
  )
}
