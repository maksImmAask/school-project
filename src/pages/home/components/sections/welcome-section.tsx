import {Box, Flex, Text, Button } from '@mantine/core'
import { useTranslation } from 'react-i18next'
export const Welcome = () => {
  const {t} = useTranslation()

  return (
    <>
      <section className="section">
        <div className="container">
          <Box className="home-box">
            <Flex className="home-flex" justify="center" align="center" gap='md' >

              <Box flex={1} className="bg-img">
                <img className="img-main" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYpwT22GwVvmr7ftNyToExO9ajQkD8t47EQ&s" alt="" />
              </Box>
              <Box flex={1}>
                <Flex direction={'column'}>
                  <Box>
                    <Text className="title title-home" size="60px" fw={900} c="blue">
                      {t("home.first-section.welcome")}
                    </Text>
                  </Box>
                  <Box>
                    <Box>
                      <Text>{t("home.first-section.welcome-description")}</Text>
                    </Box>
                    <Box>
                      <Flex gap="md" justify="flex-start" align="center" mt="md">
                      <Button>{t("home.first-section.contact-btn")}</Button>
                      <Button variant="outline">{t("home.first-section.more-btn")}</Button>
                      </Flex>
                    </Box>
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