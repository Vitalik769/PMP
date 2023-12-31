import React, { Component } from "react";
import { StyleSheet, View, Animated, Easing, SafeAreaView } from "react-native";
import Scroll from "./Components/Scroll";

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
      duration: 4000,
      easing: Easing.linear,
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
          <Scroll />
        </SafeAreaView>
        <View style={styles.animationContainer}>
          <Animated.Image
            style={{
              width: 200,
              height: 200,
              transform: [{ rotate: spin }],
            }}
            source={require("./assets/hi.png")}
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
    alignItems: "center",
    justifyContent: "center",
  },
});
