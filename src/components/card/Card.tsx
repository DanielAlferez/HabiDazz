import React from 'react'
import { Button, Text, Touchable, TouchableOpacity, View } from 'react-native'
import Images from '../common/Images'

interface ICard {
  title?: string;
  phrase?: string;
  time?: string;
  type: string;
}

function Card( {title, phrase, time, type} : ICard ) {
  return (
    <View className='flex flex-row justify-around items-center'>
      <Images tipo={type}/>
      <TouchableOpacity className='flex flex-col justify-between'>
        <Text className='font-extrabold'>{title}</Text>
        <Text className='text-habidazz-basic-grayD'>{phrase}</Text>
        <Text className='text-habidazz-basic-red font-bold'>{time}</Text>
      </TouchableOpacity>
      <TouchableOpacity className='px-3 py-2 rounded-3xl bg-habidazz-basic-grayL'>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Card