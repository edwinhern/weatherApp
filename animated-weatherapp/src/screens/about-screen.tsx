import React from "react";
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import AnimatedColorBox from "../components/animated-color-box";
import Navbar from "../components/navbar";
import Masthead from "../components/masthead";
import LinkButton from "../components/link-button";

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("warmGray.50", "warmGray.900")}
      w="full"
    >
      <Masthead title="About this app" image={require("../assets/bg-6.webp")}>
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue("warmGray.50", "primary.900")}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require("../assets/bg-5.webp")}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <Text textAlign="center" fontWeight="bold" fontSize="md" w="full">
            This is my first app built with React Native to understand the
            fundamentals as well as integrating a weather API.
          </Text>
          <LinkButton
            colorScheme="blue"
            size="lg"
            borderRadius="full"
            href="https://www.linkedin.com/in/edwinhern16/"
            leftIcon={
              <Icon as={Feather} name="linkedin" size="sm" opacity={0.5} />
            }
          >
            LinkedIn
          </LinkButton>
          <LinkButton
            colorScheme="lightBlue"
            size="lg"
            borderRadius="full"
            href="https://twitter.com/EdwinHern15"
            leftIcon={
              <Icon as={Feather} name="twitter" size="sm" opacity={0.5} />
            }
          >
            @edwinhern15
          </LinkButton>
          <LinkButton
            colorScheme="red"
            size="lg"
            borderRadius="full"
            href="https://www.instagram.com/edwinhern15/"
            leftIcon={
              <Icon as={Feather} name="instagram" size="sm" opacity={0.5} />
            }
          >
            Instagram
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  );
};

export default AboutScreen;
