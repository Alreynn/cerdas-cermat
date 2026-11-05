import { SafeAreaView } from "react-native-safe-area-context"
import { View, Pressable, Image, Text } from "react-native";
import { Link } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"
import { DirectButton } from "./components/Buttons.tsx"

const App = () => {
    return (
        <SafeAreaView className="flex justify-center h-full w-full p-3 bg-[#1B1A4B]">
            <View className="flex flex-row justify-center py-4 my-4">
                <Image source={require("../../assets/images/lightbulb.png")} className="w-96 h-96 scale-110" />
            </View>
            
            <Text className="font-extrabold text-5xl text-[#FFC35D] text-center">
                CERMAT
            </Text>
            
            <Text className="font-semibold text-white/75 text-center mb-10">
                Cerdas Cermat · Adu Ketepatan
            </Text>

            <DirectButton text="Mulai Main" icon="play" destination="./Choose" />

            <Pressable className="flex flex-row gap-2 justify-center items-center">
                <Ionicons name="options" size={20} color="gray" />

                <Link href='/Settings' asChild>
                    <Pressable>
                        <Text className="font-semibold text-white/50 text-center">
                            Pengaturan
                        </Text>
                    </Pressable>
                </Link>
            </Pressable>
        </SafeAreaView>
    );
};
export default App;