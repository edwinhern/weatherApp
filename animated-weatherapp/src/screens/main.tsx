import * as React from 'react';
import { Text,Box, Center } from 'native-base';

export default function MainScreen() {
    return (
        <Center _dark={{ bg: 'blueGray.900'}} _light={{bg: 'blueGray.50'}} px={4} flex={1}>
            <Box>
                <Text>This is main.tsx</Text>
            </Box>
        </Center>
    )
}