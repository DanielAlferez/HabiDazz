import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { format } from "date-fns";
import Container from "../components/common/Container";
import WeekCalendar from "../components/common/WeekCalendar";
import ContainerTitle from "../components/common/ContainerTitle";
import Card from "../components/card/Card";
import Menu from "../components/common/Menu";
import ScreensLayout from "./ScreensLayout";

function Main({ navigation }: any) {
  const [date, setDate] = useState(new Date());
  const today = new Date();

  return (
      <ScreensLayout>
        <View className="flex-row m-5">
          <Text className="font-bold text-2xl text-black">
            {" "}
            {`${
              date.getDate() === today.getDate()
                ? "Today"
                : date.getDate() === today.getDate() + 1
                ? "Tomorrow"
                : date.getDate() === today.getDate() - 1
                ? "Yesterday"
                : format(date, "EEEE")
            }`}
            ,
          </Text>
          <Text className="font-bold text-2xl text-habidazz-basic-grayD">
            {" "}
            {`${format(date, "MMMM")} ${date.getDate()}`}
          </Text>
        </View>
        <View className="mx-5">
          <Container>
            <WeekCalendar
              date={date}
              onChange={(newDate) => setDate(newDate)}
            />
          </Container>
        </View>
        <ScrollView className="px-5">
          <Container>
            <ContainerTitle icon="wb-sunny" title="Morning Cicle" />
            <Card
              title={"GYM Sessions"}
              phrase={"Be strong, be better."}
              time={"Active"}
              type={"book"}
            />
            <Card
              title={"GYM Sessions"}
              phrase={"Be strong, be better."}
              time={"Active"}
              type={"camera"}
            />
            <Card
              title={"GYM Sessions"}
              phrase={"Be strong, be better."}
              time={"Active"}
              type={"camp"}
            />
            <Card
              title={"GYM Sessions"}
              phrase={"Be strong, be better."}
              time={"Active"}
              type={"car"}
            />
            <Card
              title={"GYM Sessions"}
              phrase={"Be strong, be better."}
              time={"Active"}
              type={"coffe"}
            />
          </Container>
          <Container>
            <ContainerTitle icon="nightlight" title="Evening Cicle" />
            <Card
              title={"GYM Sessions"}
              phrase={"Be strong, be better."}
              time={"Active"}
              type={"computer"}
            />
            <Card
              title={"GYM Sessions"}
              phrase={"Be strong, be better."}
              time={"Active"}
              type={"games"}
            />
            <Card
              title={"GYM Sessions"}
              phrase={"Be strong, be better."}
              time={"Active"}
              type={"gym"}
            />
            <Card
              title={"GYM Sessions"}
              phrase={"Be strong, be better."}
              time={"Active"}
              type={"house"}
            />
            <Card
              title={"GYM Sessions"}
              phrase={"Be strong, be better."}
              time={"Active"}
              type={"meditation"}
            />
          </Container>
          <Container>
            <ContainerTitle icon="nights-stay" title="Noon Cicle" />
            <Card
              title={"GYM Sessions"}
              phrase={"Be strong, be better."}
              time={"Active"}
              type={"music"}
            />
            <Card
              title={"GYM Sessions"}
              phrase={"Be strong, be better."}
              time={"Active"}
              type={"pets"}
            />
            <Card
              title={"GYM Sessions"}
              phrase={"Be strong, be better."}
              time={"Active"}
              type={"pomodoro"}
            />
            <Card
              title={"GYM Sessions"}
              phrase={"Be strong, be better."}
              time={"Active"}
              type={"travel"}
            />
            <Card
              title={"GYM Sessions"}
              phrase={"Be strong, be better."}
              time={"Active"}
              type={"wallet"}
            />
            <Card
              title={"GYM Sessions"}
              phrase={"Be strong, be better."}
              time={"Active"}
              type={"running"}
            />
          </Container>
        </ScrollView>
        <Menu />
      </ScreensLayout>
  );
}

export default Main;
