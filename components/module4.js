import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, SearchBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const { width, height } = Dimensions.get('window');

const CheckboxExample = () => {
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Jaisalmer' },
        { id: 2, label: 'Hyderabad' },
        { id: 3, label: 'Varanasi' },
        { id: 4, label: 'Munnar' },
        { id: 5, label: 'Leh Ladakh' },
        { id: 6, label: 'Chennai' },
        { id: 7, label: 'Pushkar' },
        { id: 8, label: 'Andaman Islands' },
        { id: 9, label: 'Jammu & Kashmir' },
        { id: 10, label: 'Gangtok' },
        { id: 11, label: 'Hampi' },
        { id: 12, label: 'Jaisalmer' },
        { id: 13, label: 'Hyderabad' },
        { id: 14, label: 'Varanasi' },
        { id: 15, label: 'Munnar' },
        { id: 16, label: 'Leh Ladakh' },
        { id: 17, label: 'Chennai' },
        { id: 18, label: 'Pushkar' },
        { id: 19, label: 'Andaman Islands' },
        { id: 20, label: 'Jammu & Kashmir' },
        { id: 21, label: 'Gangtok' },
        { id: 22, label: 'Hampi' },
    ]);

    const handleCheckboxChange = (id) => {
        const updatedCheckboxes = checkboxes.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, value: !checkbox.value } : checkbox
        );
        setCheckboxes(updatedCheckboxes);
    };


    return (
        <View style={{}}>
            <View style={{ width: width * 1, flexDirection: "row" }}>
                <View style={{ width: width * .8, height: 60, marginLeft: 10 }}>
                    <Text style={{ marginTop: 15, fontSize: 20, fontWeight: "bold", elevation: 2, color: "black" }}><Image source={require('../assets/cross.png')} style={{ width: 20, height: 10, marginTop: 10 }} />&nbsp;Destinations</Text>
                </View>
                <View style={{ width: width * .2 }}>
                    <Text style={{ fontSize: 20, fontWeight: "normal", marginTop: 15 }}>Clear</Text>
                </View>
            </View>
            <View style={{
                height: 1,
                width: "100%",
                backgroundColor: "#ddd",
                elevation: 7,
            }} />
            <View style={{ flexDirection: "row", justifyContent: "center", padding: 10 }}>
                <View style={{ backgroundColor: "#F0EFEF", width: width * .9, height: 50, borderRadius: 5, padding: 3 }}>
                    <TextInput style={{ color: "#ccc" }}>
                        <Image source={require("../assets/search.png")} style={{ width: 15, height: 15, paddingLeft: 10 }} />
                        &nbsp;&nbsp;Search Destinations</TextInput>
                </View>
            </View>

            <View>
                <View style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#ddd",
                    elevation: 7,
                }} />
                    <View style={{flexGrow:1}}>    
                    <ScrollView style={{height:height*.9}}>
                    {checkboxes.map((checkbox) => (
                        <TouchableOpacity key={checkbox.id} onPress={() => handleCheckboxChange(checkbox.id)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: 60, flex: 1, marginLeft: 22 }}>
                                <Icon
                                    name={checkbox.value ? 'check-box' : 'check-box-outline-blank'}
                                    size={30}
                                    color={checkbox.value ? 'orange' : 'gray'}

                                />
                                <Text style={style.label}>{checkbox.label}</Text>

                            </View>
                            <View style={style.separator} />
                        </TouchableOpacity>
                    ))}

                </ScrollView><View style={style.buttonContainer}>
  <TouchableOpacity style={style.button}>
    <Text style={style.buttonText}>Apply</Text>
  </TouchableOpacity>
</View>
                </View>
                </View>

            </View>


        
    );
};

const style = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 80,
        left: 0,
        right: 0,
        alignItems: 'center',
        
      },
      button: {
        height:50,
        width:width*.9,
        backgroundColor: 'orange',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      buttonText: {
        color: '#fff',
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold"
      },
    
    
    
    
    
    
    
    label: {
        margin: 15,
        fontSize: 19,
    },
    separator: {
        height: 1,
        width: "90%",
        backgroundColor: "#ddd",
        alignSelf:"center",
    },
    Separator: {
        height: 1,
        width: "90%",
        backgroundColor: "#ddd"
    },
})
export default CheckboxExample;
