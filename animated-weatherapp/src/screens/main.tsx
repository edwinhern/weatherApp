import * as React from "react";
import { Text, Box, Center, VStack, useColorModeValue } from "native-base";
import Masthead from "../components/masthead";
import Navbar from "../components/navbar";
import AnimatedColorBox from '../components/animate-color-box'
export default function MainScreen() {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      w="full"
    >
      <Masthead
        title="What's up, Edwin!"
        image={require("../assets/bg.jpeg")}
      >
        <Navbar />
      </Masthead>
      <VStack 
        flex={1} 
        space={5} 
        alignItems="center"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        pt="20px">
        <Box p={10} bg={useColorModeValue("red.500", "yellow.500")}>
          <Text>This is main.tsx</Text>
        </Box>
      </VStack>
    </AnimatedColorBox>
  );
}
