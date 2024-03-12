import React, { ReactNode } from 'react'
import { View } from 'react-native'

interface ContainerProps {
    children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <View className='w-full py-2 px-2 my-1 rounded-3xl bg-white'>
        {children}
    </View>
  )
}

export default Container