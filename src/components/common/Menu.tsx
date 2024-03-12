import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Menu = () => {

  const menuItems = [
    { id: 1, label: 'Inicio' },
    { id: 2, label: 'Perfil' },
    { id: 3, label: 'Configuración' },
    { id: 4, label: 'Ayuda' },
  ];

  return (
    <View className='flex flex-row justify-around py-5 bg-white rounded-t-3xl'>
      {menuItems.map((item) => (
        <TouchableOpacity
        >
          <Text>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};


export default Menu;
