import React from 'react';
import { View, Image, Text } from 'react-native';
import GYM from '../../../assets/images/gym-dynamic-color.png';
import GAME from '../../../assets/images/minecraft-dynamic-color.png';
import MUSIC from '../../../assets/images/headphone-dynamic-color.png';

interface ImagesProps {
    tipo: string;
}

function Images({ tipo } : ImagesProps) {
  if (tipo === 'gym') {
    return <Image source={GYM}  className='bg-habidazz-basic-purple rounded-3xl w-20 h-20 my-2 ' />;
  } else if (tipo === 'game') {
    return <Image source={GAME}  className='bg-habidazz-basic-green rounded-3xl w-20 h-20 my-2' />;
  }else if (tipo === 'music') {
    return <Image source={MUSIC}  className='bg-habidazz-basic-yellow rounded-3xl w-20 h-20 my-2' />; 
  } else {
    return <Text>No se ha proporcionado un tipo válido.</Text>;
  }
}

export default Images;
