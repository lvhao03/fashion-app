import React from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
function ProductScreen(){
    return (
        <View className="p-4">
            <Pressable>
                <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
            <Image className="rounded-md w-full h-1/2" source={require('../assets/banner.jpg')} />

            {/* Kich co */}
            <View className=" flex-row items-center gap-2">
                <Text className="font-bold text-xl">Size:</Text>
                <View className="flex-row gap-2">
                    <Text className="text-lg text-red-500 bg-white p-2  px-4 rounded-lg">S</Text>
                    <Text className="text-lg text-red-500 bg-white p-2  px-4 rounded-lg">M</Text>
                    <Text className="text-lg text-red-500 bg-white p-2  px-4 rounded-lg">L</Text>
                    <Text className="text-lg text-red-500 bg-white p-2  px-4 rounded-lg">XL</Text>
                </View>
            </View>

            {/* Mô tả */}
            <View className="">
                <View className="flex-row justify-between items-center">
                    <Text className=" text-xl font-bold">Áo thun hoodle</Text>
                    <Text className=" text-lg">199.000đ</Text>
                </View>
                <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
            </View>

            {/* Nut */}
            <View className="flex-row">
                <Pressable className=" flex-row p-2 rounded-xl items-center" style={styles.bg}>
                    <View className="bg-white p-1 rounded-full items-center">
                        <AntDesign name="shoppingcart" size={24} color="red" />   
                    </View>
                    <Text className=" ml-1 text-white align-middle font-medium">Thêm vào giỏ hàng</Text>
                </Pressable>

                <Pressable className=" p-2 bg-black rounded-xl ali">
                    <Text className=" text-white items-center font-medium">Mua ngay</Text>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#F39D1A',
    },
})
export default ProductScreen