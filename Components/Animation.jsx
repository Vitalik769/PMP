import React, { Component } from "react";
import { StyleSheet, View, Animated, Easing, SafeAreaView } from "react-native";

export default class App extends Component {
    constructor() {
        super();
        this.spinValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.spin();
    }

    spin() {
        this.spinValue.setValue(0);
        Animated.timing(this.spinValue, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => this.spin());
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"],
        });

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.scroll}>
                </SafeAreaView>
                <View style={styles.animationContainer}>
                    <Animated.Image
                        style={{
                            width: 215,
                            height: 200,
                            transform: [{ rotate: spin }],
                        }}
                        source={require("./Pictures/react_logo.png")}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    scroll: {
        flex: 1,
        width: "100%",
    },
    animationContainer: {
        marginTop: 100,
        alignItems: "center",
        justifyContent: "center",
    },
});
