import { View, ScrollView, FlatList, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { CategoryButton } from "./components/Buttons.tsx"
import Ionicons from "@expo/vector-icons/Ionicons"
import { useRouter } from "expo-router"

const categories = [
    {id: "umum", text: "Umum", icon: "bulb-outline", iconBackColor: "bg-[#FFC53D]"},
    {id: "mtk", text: "Matematika", icon: "calculator-outline", iconBackColor: "bg-[#FF8A7A]"},
    {id: "ipa", text: "IPA", icon: "flask-outline", iconBackColor: "bg-[#2EC4B6]"},
    {id: "sjrh", text: "Sejarah", icon: "flask-outline", iconBackColor: "bg-[#2EC4B6]"},
    {id: "eko", text: "Ekonomi", icon: "wallet-outline", iconBackColor: "bg-[#2EC4B6]"},
    {id: "geo", text: "Geografi", icon: "earth-outline", iconBackColor: "bg-[#2EC4B6]"},
    {id: "astr", text: "Astronomi", icon: "sunny-outline", iconBackColor: "bg-[#2EC4B6]"},
    {id: "bind", text: "B. Indonesia", icon: "book-outline", iconBackColor: "bg-[#2EC4B6]"},
    {id: "bing",text: "B. Inggris", icon: "chatbox-ellipses-outline", iconBackColor: "bg-[#2EC4B6]"},
    {id: "olhr", text: "Olahraga", icon: "barbell-outline", iconBackColor: "bg-[#2EC4B6]"},
    {id: "snbd", text: "Seni Budaya", icon: "brush-outline", iconBackColor: "bg-[#2EC4B6]"},
    {id: "tech", text: "Teknologi", icon: "laptop-outline", iconBackColor: "bg-[#2EC4B6]"},
]

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
                <Text className="font-bold text-4xl text-white">Pilih Kategori</Text>
            </View>
            
            <Text className="font-semibold text-sm text-white/80 mt-3 mb-6">Pilih salah satu kuis untuk memulai topik</Text>
            
            <FlatList
                data={categories}
                numColumns={2}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ gap: 2 * 4, paddingBottom: 4 * 4 }}
                renderItem={({item}) =>
                    <CategoryButton text={item.text} icon={item.icon} iconBackColor={item.iconBackColor} />
                }
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}
export default Settings;