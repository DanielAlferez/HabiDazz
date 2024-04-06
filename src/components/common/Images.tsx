// En el archivo imageImports.js
export const images = {
  BOOK: require('../../../assets/images/book.png'),
  CAMERA: require('../../../assets/images/camera.png'),
  CAMP: require('../../../assets/images/camp.png'),
  CAR: require('../../../assets/images/car.png'),
  COFFE: require('../../../assets/images/coffe.png'),
  COMPUTER: require('../../../assets/images/computer.png'),
  GAMES: require('../../../assets/images/games.png'),
  GYM: require('../../../assets/images/gym.png'),
  HOUSE: require('../../../assets/images/house.png'),
  MEDITATION: require('../../../assets/images/meditation.png'),
  MUSIC: require('../../../assets/images/music.png'),
  PETS: require('../../../assets/images/pets.png'),
  POMODORO: require('../../../assets/images/pomodoro.png'),
  TRAVEL: require('../../../assets/images/travel.png'),
  WALLET: require('../../../assets/images/wallet.png'),
  RUNNING: require('../../../assets/images/running.png'),
};

// En el archivo Images.tsx
import React from 'react';
import { Image, Text } from 'react-native';

interface ImagesProps {
  tipo: string;
}

function Images({ tipo }: ImagesProps) {
  const imageSources: Record<string, any> = {
      book: images.BOOK,
      camera: images.CAMERA,
      camp: images.CAMP,
      car: images.CAR,
      coffe: images.COFFE,
      computer: images.COMPUTER,
      games: images.GAMES,
      gym: images.GYM,
      house: images.HOUSE,
      meditation: images.MEDITATION,
      music: images.MUSIC,
      pets: images.PETS,
      pomodoro: images.POMODORO,
      travel: images.TRAVEL,
      wallet: images.WALLET,
      running: images.RUNNING,
  };

  const selectedImage = imageSources[tipo];

  if (selectedImage) {
      return <Image source={selectedImage} className='rounded-3xl w-20 h-20 my-2 ' />;
  } else {
      return <Text>No se ha proporcionado un tipo válido.</Text>;
  }
}

export default Images;
