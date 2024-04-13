import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
  const menuItems = [
    { id: 1, label: "Home" },
    { id: 2, label: "Profile" },
    { id: 3, label: "Create" },
    { id: 4, label: "Configuration" },
  ];

  const navigation = useNavigation()

  return (
    <View className="flex flex-row justify-around py-5 bg-white rounded-t-3xl">
      {menuItems.map((item) => (
        <TouchableOpacity onPress={() => navigation.navigate(item.label)}>
          <Text>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Menu;
