import React from 'react'
import { Text, View } from 'react-native'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface ContainerTitleProps {
    icon: string | undefined
    title: string   
}

export default function ContainerTitle({icon, title} : ContainerTitleProps) {
  return (
    <View className="flex flex-row gap-2 items-center">
        <MaterialIcons name={icon} size={20}/>
        <Text className='font-bold text-lg text-black'>{title}</Text>
    </View>
  )
}
