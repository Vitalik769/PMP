import React from "react";
import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider, HStack, Text, Box, VStack, Toast, Input, Button, Heading } from "native-base";

const HomeScreenContent = () => {
    const navigation = useNavigation();

    const handleNavigationGallery = () => {
        navigation.navigate('Gallery')
    }

    const handleNavigationReactLogo = () => {
        navigation.navigate('ReactLogo')
    }

    return (
        <VStack space={4} alignItems="center" style={{ marginTop: 60 }}>
            <Text>Рomepage</Text>
            <VStack space={4} alignItems="center" style={{ marginTop: 200 }}>
                <Button title="Gallery" onPress={handleNavigationGallery}>Gallery</Button>
                <Button title="ReactLogo" onPress={handleNavigationReactLogo}>React Logo</Button>
            </VStack>
        </VStack>
    )
};

export default HomeScreenContent;