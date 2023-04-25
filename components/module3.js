import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView, ImageBackground} from 'react-native';

const {width, height} = Dimensions.get('window');

const data=[
    {key:"1", value:"Varanasi"},
    {key:"2", value:"Delhi"},
    {key:"3", value:"Bengaluru"},
    {key:"4", value:"Goa"},
    {key:"5", value:"Shimla"},
    {key:"6", value:"Manali"},
    {key:"7", value:"Chennai"},
    {key:"8", value:"Hyderabad"},
    {key:"9", value:"Mumbai"},

]

var Frames=[];
var title=["Varanasi Private Day Tour", "Varanasi Ganga Ghat aarti", "Varanasi- Haridwar Combined Tour"];
var discount=["25% off", "15% off", "10% off"]
var rating=['3.5', '4.5', '6.7'];
var count=['(2 reviews)', "(3 reviews)", "(7 reviews)"];
var booked=["100 + booked", "50 + booked", "75 + booked"];
var pricestriked=['₹1,150', '₹5,444', '₹1,455'];
var newprice=['₹850', '₹750', '₹900'];
var img=[require("../assets/varanasi.jpg"), require("../assets/manali.jpg"), require("../assets/rishikesh.jpg")];

const Separator=()=><View style={styles.separator}/>;

for(let i=0; i<3; i++){
    Frames.push(
        <View key={i} style={{marginTop:30,backgroundColor:"#FFF",height:height*.4,width:width*.9,elevation:3,marginRight:30,marginLeft:20,marginBottom:5}}>
        <ImageBackground source={img[i]} style={{width:"100%",height:height*.2}}>
        <Text style={{position: 'absolute',top: 10,left: 10,color:"white",fontSize:20,fontWeight:"bold"}}><Image source={require("../assets/location.png" )} style={{height:15, width:15}}></Image>Varanasi</Text>
        <Text style={{backgroundColor:"#FA8612",position: 'absolute',bottom: 10,left: 10,fontSize:16,color:"white",fontFamily:"Regular",elevation:2,borderwidth:2,padding:4,}}>{discount[i]}</Text></ImageBackground>
        <View style={{padding:15}}>
        <Text style={{fontFamily:"Bold",color:"black",letterSpacing:0.2,fontSize:20,fontWeight:"bold", marginTop:5}}>{title[i]}</Text>
        <Text style={{fontSize:20,color:"#F7C127",fontFamily:"Regular", marginTop:5}}><Image source={require("../assets/star.png" )} style={{width:20, height:20}}></Image>&nbsp;{rating[i]}<Text style={{fontSize:16,color:"#727170",fontFamily:"Regular"}}>&nbsp;{count[i]}</Text><Text style={{fontSize:16,color:"#727170",fontFamily:"Regular"}}>&nbsp;|&nbsp;</Text><Text style={{fontSize:16,color:"#727170"}}>{booked[i]}</Text></Text>
        <Text style={{textDecorationLine:"line-through", fontSize:17,color:"#ccc", marginTop:10}}>{pricestriked[i]}</Text>
        <View style={{flexDirection:"row",marginTop:1,alignItems:"center",width:"100%"}}>
        <View style={{width:"30%"}}><Text style={{fontSize:15,color:"black"}}>From <Text style={{fontWeight:"bold",fontSize:20,color:"black"}}>{newprice[i]}</Text></Text>
        </View><View style={{width:"70%"}}><Text style={{color:"green",alignSelf:"flex-end", fontSize:15,}}>Book Now for Tomorrow</Text></View></View></View>
        </View>
    )
}

export default class module1 extends React.Component{   
     
      render() {
        return(
            <ScrollView >
            <View>
            <View style={{width:width*1, flexDirection:"row"}}>
            <View style={{width:width*.4}}>
                <Text style={styles.heading1}>Destinations(1)&nbsp;&nbsp;
                <TouchableOpacity>
                      <ImageBackground source={require("../assets/dropdown.png" )} style={styles.icon}>
                      </ImageBackground>
                      </TouchableOpacity>
                </Text>
            </View>
            <View style={{width:width*.5}}>
                <Text style={styles.heading1}>Categories&nbsp;&nbsp;
                      <Image source={require("../assets/dropdown.png" )} style={styles.icon}></Image>
                      
                </Text>
            </View>
            </View>
            <Separator/>
            <View>
            <View style={{width:width*1, flexDirection:"row"}}>
            <View style={{width:width*.4}}>
                <Text style={styles.subheading1}>Varanasi&nbsp;&nbsp;
                      <Image source={require("../assets/cross.png" )} style={styles.icon}></Image>
                </Text>
            </View>
            <View style={{width:width*.6}}>
                      <Image source={require("../assets/cross2.jpeg" )} style={styles.icon2}></Image>      
                
            </View>
            </View>
            </View><Separator/>
            <View style={{backgroundColor:"#ccca"}}>
                <Text style={styles.activity}>
                    15 Activities
                </Text>
                    {Frames}
            </View>
            </View>
            <View style={{flex:1, paddingHorizontal:20, paddingTop:20}}>

            </View>
            </ScrollView>
            
        )
    }
}

const styles=StyleSheet.create({
    heading1:{
        color:"black",
        padding:12,
        fontSize:16
    },
    icon:{
        width:15,
        height:15
    },
    separator:{
        height:1,
        width:"100%",
        backgroundColor:"#ddd"
    },
    subheading1:{
        padding:3,
        width:width*.3,
        textAlign:"center",
        borderRadius:2,
        margin:10,
        color:"black",
        fontSize:18,
        borderWidth:1,
    },
    icon2:{
        marginTop:20,
        marginRight:15,
        alignSelf:"flex-end",
        width:20,
        height:20,
    },
    activity:{
        marginTop:15,
        marginLeft:15,
        marginBottom:-10,
        padding:0,
        fontSize:20,
    },
})

