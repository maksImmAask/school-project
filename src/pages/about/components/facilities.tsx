import { Box, Flex, Text } from "@mantine/core"
import {  BookSquare, Building, Command, MainComponent} from "iconsax-reactjs"

export const Facilities = () => {
  return (
    <>
      <section className="leadership">
        <div className="container">
          <Box className="leadership-box">
            <Text size="40px" fw={700}>School Leadership</Text>
            <Box className="items-leader">
              <Flex className="leader-flex" gap={'md'}>
                <Box className="flex-item-leader" flex={1}>
                  <Building className="icon-leader" size="80" color="var(--mantine-color-blue-6)"/>
                  <Text className="leader-title">Modern Classrooms</Text>
                  <Text>Equipped with the latest
technology to enhance the
learning experience.</Text>
                </Box>
                <Box className="flex-item-leader" flex={1}>
                  <BookSquare className="icon-leader" size="80" color="var(--mantine-color-blue-6)"/>
                  <Text className="leader-title">Library</Text>
                  <Text>A vast collection of books,
digital resources, and quiet
study spaces.</Text>
                </Box>
                <Box className="flex-item-leader" flex={1}>
                  <MainComponent className="icon-leader" size="80" color="var(--mantine-color-blue-6)"/>
                  <Text className="leader-title">Computer Labs</Text>
                  <Text>State-of-the-art computer labs
with the latest software and
hardware.</Text>
                </Box>
                <Box className="flex-item-leader" flex={1}>
                  <Command className="icon-leader" size="80" color="var(--mantine-color-blue-6)"/>
                  <Text className="leader-title">Sports Facilities</Text>
                  <Text>Indoor and outdoor sports
facilities for various activities
and physical education.</Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </div>
      </section>
    </>
  )
}