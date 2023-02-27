import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TextInput, Button, TouchableHighlight} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Product from '../components/ProductComponent';

function HomeScreen(){
    return (
    <ScrollView className="p-4 mt-4" style={styles.bg}>
        <View className=" flex-row justify-between my-4">
            <View className=" bg-white p-4 rounded-2xl">
                <AntDesign name="bars" size={24} color="black" />
            </View>
            <View className=" bg-white p-4 rounded-2xl">            
                <AntDesign name="shoppingcart" size={24} color="black" />    
            </View>
        </View>

        <View className=" my-4 flex-row items-center justify-between">
            <TextInput className=" mr-3 flex-1 p-4 bg-white rounded-xl shadow" placeholder='Tìm kiếm'/>
            <View className="bg-black p-4 rounded-lg">
              <AntDesign name="filter" size={24} color="white" />
            </View>
        </View>

        {/* Banner */}
        <Image className=" w-full rounded-lg"source={require('../assets/banner.jpg')}/>

        {/* Catergory */}
        <View className="my-3">
            <View className="flex-row gap-4 items-center">
                <View style={styles.active} className="items-center flex-row bg-white p-2 rounded-lg">
                    <MaterialCommunityIcons name="dots-grid" size={24} color="white" />
                    <Text className="p-2 text-white font-bold ">Tất cả</Text>
                </View>
                <View className="items-center flex-row bg-white p-2 rounded-lg">
                    <MaterialCommunityIcons name="dots-grid" size={24} color="black" />
                    <Text className="p-2">Quần jean</Text>
                </View>
                <View className="items-center flex-row bg-white p-2 rounded-lg">
                    <MaterialCommunityIcons name="dots-grid" size={24} color="black" />
                    <Text className="p-2">Áo thun</Text>
                </View>
            </View>
        </View>

        {/* Arrivals Section */}
        <View className="flex flex-row justify-between items-center my-3">
            <Text className=" text-lg font-bold">Mới nhất</Text>
            <Text className=" font-light">Xem tất cả</Text>
        </View>

        <View className=" flex-row flex-wrap">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </View>
        {/*  */}
        <View className="flex flex-row justify-between items-center my-3">
            <Text className=" text-lg font-bold">Nổi bật</Text>
            <Text>Xem tất cả</Text>
        </View>

        <View className=" flex-row flex-wrap">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor:'#F8F8F8'
    },
    active: {
        backgroundColor: '#F39D1A',
        color: 'white'
    },
})
export default HomeScreen