import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Ionicons from "@expo/vector-icons/Ionicons"
import { useRouter } from "expo-router"

const Settings = () => {
    const router = useRouter();
    
    return (
        <SafeAreaView className="bg-[#1B1A4B] h-full w-full p-5">
            <View className="flex-row">
                <Ionicons name="chevron-back-outline" 
                    size={24} 
                    color="white"
                    className="bg-[#282A70] p-3 rounded-full flex items-center justify-center"
                    onPress={() => router.back()}
                />
            </View>
            
            <View className="mt-3">
                <Text className="font-bold text-4xl text-white">Pengaturan</Text>
            </View>
            
            <Text className="font-semibold text-sm text-white/80">Cermat 1.0.0</Text>
        </SafeAreaView>
    )
}
export default Settings;