import { Box, Flex, Text } from "@mantine/core"
import { BookSquare, Building, Command, MainComponent } from "iconsax-reactjs"

export const Facilities = () => {
  return (
    <>
      <section className="leadership">
        <div className="container">
          <Box className="leadership-box">
            <Text size="40px" fw={700}>Our Facilities</Text>
            <Box className="items-leader">
              <Flex className="leader-flex" gap={'md'}>
                <Box className="flex-item-leader" flex={1}>
                  <Building className="icon-leader" size="80" color="var(--mantine-color-blue-6)"/>
                  <Text className="leader-title">Modern Classrooms</Text>
                  <Text>
                    Our classrooms are designed with modern layouts and equipped with smart boards,
                    projectors, and interactive tools to enhance learning.
                  </Text>
                </Box>
                <Box className="flex-item-leader" flex={1}>
                  <BookSquare className="icon-leader" size="80" color="var(--mantine-color-blue-6)"/>
                  <Text className="leader-title">Library</Text>
                  <Text>
                    A spacious library with thousands of books, digital resources, and peaceful
                    study areas to support research and learning.
                  </Text>
                </Box>
                <Box className="flex-item-leader" flex={1}>
                  <MainComponent className="icon-leader" size="80" color="var(--mantine-color-blue-6)"/>
                  <Text className="leader-title">Computer Labs</Text>
                  <Text>
                    Fully equipped computer labs with the latest hardware and software, giving
                    students hands-on experience in technology.
                  </Text>
                </Box>
                <Box className="flex-item-leader" flex={1}>
                  <Command className="icon-leader" size="80" color="var(--mantine-color-blue-6)"/>
                  <Text className="leader-title">Sports Facilities</Text>
                  <Text>
                    Indoor and outdoor sports grounds, gymnasium, and courts for a variety of
                    athletic and fitness activities.
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </div>
      </section>
    </>
  )
}
