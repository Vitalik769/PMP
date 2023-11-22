import React from "react";
import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider, HStack, Text, Box, VStack, Toast, Input, Button, Heading } from "native-base";
import Animation from './Animation';

const ReactLogo = () => {
    const navigation = useNavigation();

    const handleNavigationGallery = () => {
        navigation.navigate('Gallery')
    }

    const handleNavigationHomeScreenContent = () => {
        navigation.navigate('HomeScreenContent')
    }

    return (
        <VStack space={4} alignItems="center" style={{ marginTop: 60 }}>
            <Animation />
            <VStack space={4} alignItems="center" style={{ marginTop: 200 }}>
                <Button title="Home" onPress={handleNavigationHomeScreenContent}>Home Content</Button>
                <Button title="Gallery" onPress={handleNavigationGallery}>Gallery</Button>
            </VStack>
        </VStack>
    )
};

export default ReactLogo;