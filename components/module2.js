import React from 'react';
import { Text, View, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get('window');

var Frames = [];
var title = ["Delhi", "Manali", "Jaipur"];
var name = ["3D2N Golden Triangle Tour", "4D3N Special TOur ", "Special Travel Package"]
var rating = ['3.5', '4.5', '6.7'];
var count = ['(2 reviews)', "(3 reviews)", "(7 reviews)"];
var sub = ["English Available", "BestSeller", "Popular"];
var prices = ['₹1,150', '₹5,444', '₹1,455'];
var img = [require("../assets/varanasi.jpg"), require("../assets/manali.jpg"), require("../assets/rishikesh.jpg")];

for (let i = 0; i < 3; i++) {
    Frames.push(
        <View key={i} style={{backgroundColor: "#FFF", height: 650, width: 150, borderRadius: 10, padding: 2, marginRight: 20, marginLeft: 2, marginBottom: 5 }}>
            <Image source={img[i]} style={{ width: 150, height: 110, borderRadius: 10 }} />
            <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                <Text style={{ color: "#7A7777", fontSize: 14, fontFamily: "Bold", width:250 }}>{title[i]}</Text></View>
            <Text style={{ marginTop: -10, fontSize: 20, color: "black", fontFamily: "Regular" }}>{name[i]}</Text>
            <View style={{ flexDirection: "row", marginTop: 4, alignItems: "center", }}><View>
               <Text style={{ color: "#EE8516", fontSize: 16, fontFamily: "Bold" }}><Image source={require("../assets/star.png" )} style={{width:15, height:15}}/>{rating[i]}<Text style={{ color: "#ccc", fontSize: 14, fontFamily: "Bold" }}> {count[i]}</Text></Text></View></View>
            <View style={{ fontSize: 18, flexDirection: "row", marginTop: 8, alignItems: "center", }}>
                <Text style={{ backgroundColor: "#F7F7F7", color: "#ccc", textAlign: "center", alignItems: "center", fontSize: 16, FontFace: "regular", padding:2 }}>{sub[i]}</Text>
            </View>
            <View style={{ fontSize: 18, flexDirection: "row", marginTop: 8, alignItems: "center", color:"black" }}>
            <Text style={{color:"black", fontSize:16}}>From&nbsp;&nbsp;</Text>
                <Text style={{fontSize: 18, FontFace: "regular", color:"black"}}>{prices[i]}</Text></View>
            <View style={{ width: 165, borderRadius: 4, backgroundColor: "#FFF5E9", fontSize: 18, flexDirection: "row", marginTop: 8, alignItems: "center", }}>
                <Text style={{ padding: 2, width: 150, color: "#FF7400", textAlign: "center", alignItems: "center", fontSize: 15, fontWeight: "bold", FontFace: "regular", }}>Best Price Guarantee</Text>
            </View>
        </View>
    )
}

export default class module2 extends React.Component {
    render() {
        return (
            <View>
                <View style={{ width: width * 1, flexDirection: "row" }}>
                    <View style={{ width: width * .8 }}>
                        <Text style={styles.subheading1}>Popular Activities
                        </Text>
                    </View>
                    <View style={{ width: width * .2 }}>
                        <Text style={styles.seemore}>See More</Text>
                    </View>
                </View>
                <ScrollView horizontal>
                    {Frames}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    heading1: {
        color: "black",
        padding: 12,
        fontSize: 16
    },
    icon: {
        width: 15,
        height: 15
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "#ddd"
    },
    subheading1: {
        fontSize: 28,
        fontWeight: "bold",
        color: "black",
        width: width * .6,
        margin: 10,
    },
    icon2: {
        marginTop: 20,
        marginRight: 15,
        alignSelf: "flex-end",
        width: 20,
        height: 20,
    },
    activity: {
        marginTop: 15,
        marginLeft: 15,
        marginBottom: -10,
        padding: 0,
        fontSize: 20,
    },
    seemore: {
        width: width * .4,
        paddingTop: 20,
        paddingRight: 34,
        fontSize: 18,
        marginRight: -22,
        color: "black",
        textDecorationLine: "underline"
    }
})

