import { StyleSheet, Text, View ,Image, TouchableOpacity, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
function Product(){
    const navigation = useNavigation();
    let navigate = () => {
        return navigation.navigate('Product');
    }
    return (
        <TouchableOpacity onPress={navigate} className="bg-white p-4 w-1/2">
            <View>
                <Image className="rounded-md w-full" source={require('../assets/banner.jpg')} />
                <View className="p-2">
                    <Text className="font-bold text-base">Áo huddle nam 1</Text>
                    <Text>199.000đ</Text>
                    </View>
            </View>
        </TouchableOpacity>
    )
}

export default Product