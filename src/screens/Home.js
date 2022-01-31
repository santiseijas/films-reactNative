import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions,ScrollView } from "react-native";
import { backgroundColor, height } from "../../util/Constants";
import data from "../../util/data.json";
import CarouselComponent from "../components/Carousel";
import fetchData from '../../util/data'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
        height: height,
    },
    carousels:{
        marginVertical: 10,
    }
});
const Home = ({ navigation }) => {



    return (
        <ScrollView style={styles.container}>
            <View style={styles.carousels}> 
                <CarouselComponent data={data.carousels[0]} navigation={navigation}/>
                </View>
                <View style={styles.carousels}> 
                <CarouselComponent data={data.carousels[1]} navigation={navigation}/>
                </View>
                <View style={styles.carousels}> 
                <CarouselComponent data={data.carousels[2]} navigation={navigation}/>
                </View>

        </ScrollView>
    );
};

export default Home;
