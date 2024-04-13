import React, { ReactNode } from 'react'
import { SafeAreaView } from 'react-native';

interface ContainerProps {
    children: ReactNode;
}

export default function ScreensLayout({ children }: ContainerProps) {
  return (
    <SafeAreaView className="flex-1 pt-5 bg-habidazz-light-primary">
        {children}
    </SafeAreaView>

  )
}
