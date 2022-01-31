import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import {
  backgroundColor,
  height,
  width,
  AvenirBlack,
  Avenir,
} from "../../util/Constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    height: height,
  },
  carousels: {
    marginVertical: 10,
  },
});

const Detail = (route, { navigation }) => {
  const data = route.route.params;

  console.log(data);
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          borderRadius: 10,
          alignItems: "center",
          height: 400,
        }}
      >
        <Image
          source={{ uri: data.posterUrl }}
          style={{ height: 400, width: width, resizeMode: "contain" }}
        />
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            marginBottom: 20,
          }}
        >
          <Text
            style={{ color: "white", fontSize: 28, fontFamily: AvenirBlack }}
          >
            {data.title}
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 15,
              fontFamily: AvenirBlack,
              marginLeft: 15,
            }}
          >
            {data.year}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            marginBottom: 20,
          }}
        >
          <Text
            style={{ color: "white", fontSize: 18, fontFamily: AvenirBlack }}
          >
            Directed by
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 15,
              fontFamily: AvenirBlack,
              marginLeft: 5,
            }}
          >
            {data.director}
          </Text>
        </View>
        <View style={{}}>
          <Text
            style={{ color: "white", fontSize: 18, fontFamily: AvenirBlack }}
          >
            Plot:
          </Text>
          <Text
            style={{ color: "grey", fontSize: 15, fontFamily: AvenirBlack }}
          >
            {data.plot}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
