import { Text, Pressable } from "react-native"
import { Link } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"

export const DirectButton = ({destination, text, icon}: string) => {
    return (
        <Link href={destination} asChild>
            <Pressable className="bg-[#2A2870] border border-[#4A47B0] flex flex-row items-center justify-center p-4 my-3 rounded-3xl gap-4">
                <Ionicons name={icon} size={20} color="white" />
                <Text className="text-2xl font-semibold text-white text-center">{text}</Text>
            </Pressable>
        </Link>
    )
}

export const CategoryButton = ({destination, text, icon, iconBackColor}: string) => {
    return (
        <Pressable className="bg-[#2A2870] border border-[#4A47B0] w-[48%] flex-1 mx-1.5 gap-1 justify-center items-start mb-4 p-4 rounded-2xl w-48">
            <Ionicons
                name={icon} 
                size={20} 
                color="black" 
                className={`${iconBackColor} rounded-xl flex justify-center align-middle items-center p-3 shadow-inherit`}
            />
            <Text className="font-semibold text-white text-center">{text}</Text>
        </Pressable>
    )
}