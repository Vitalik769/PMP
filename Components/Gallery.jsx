import React from "react";
import { NativeBaseProvider, HStack, Text, Box, VStack, Toast, Input, Button, Heading } from "native-base";
import { useNavigation } from '@react-navigation/native';
import Scroll from './Scroll';

const Gallery = () => {
    const navigation = useNavigation();

    const handleNavigationHomeScreenContent = () => {
        navigation.navigate('HomeScreenContent')
    }

    const handleNavigationReactLogo = () => {
        navigation.navigate('ReactLogo')
    }

    return (
        <VStack space={4} alignItems="center" style={{ marginTop: 60 }}>
            <Scroll />
            <VStack space={4} alignItems="center" style={{ marginTop: 200 }}>
                <Button title="HomeScreenContent" onPress={handleNavigationHomeScreenContent}>Home Content</Button>
                <Button title="ReactLogo" onPress={handleNavigationReactLogo}>React Logo</Button>
            </VStack>
        </VStack>
    )
}

export default Gallery;