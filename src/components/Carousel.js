import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Avenir, AvenirBlack, AvenirNextCondesed, backgroundColor, width } from "../../util/Constants";

const CarouselComponent = (props,navigation) => {
    const [index, setIndex] = useState(0);

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.carouselItemView}>
                <TouchableOpacity onPress={() => props.navigation.push("Detail", item)} style={{alignItems:'center'}}>
                <Image
                    source={{ uri: item.posterUrl }}
                    style={{ height: 250, width: 200,resizeMode:'contain',flex:1, alignSelf:'stretch'}}
                />
                <Text style={{ color: "white", fontSize: 20,fontFamily:AvenirNextCondesed }}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        );
    };


    return (
        <View style={styles.carousel}>
            <View style={{ marginTop: 10 }}>
                <Text style={{ color: "white", fontSize: 30,fontFamily:AvenirBlack }}>{props.data.title}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                <Carousel
                    layout={"default"}
                    data={props.data.items}
                    sliderWidth={width}
                    itemWidth={220}
                    renderItem={renderItem}
                    onSnapToItem={(index) => setIndex(index)}
                    centerContent={true}
                />
            </View>
        </View>
    );
};

export default CarouselComponent;

const styles = StyleSheet.create({
    carousel: {
        width: width,
        height: 350,
        marginHorizontal: 10,
        backgroundColor:backgroundColor
    },
    carouselItemView:{
        justifyContent: "center",
        borderRadius: 5,
        height: 250,
        width: 200,
        marginHorizontal: 20,
        alignItems: 'center',
    }
});
