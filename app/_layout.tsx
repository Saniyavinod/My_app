import { Stack } from "expo-router";
import { Image } from "react-native";
const add = require('../assets/images/add.png')


export default function RootLayout() {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen name="login"/>
      <Stack.Screen name="dashboard" options={{
        title:"expenses",
        headerRight: () => <Image source={add} style={{width:24,height:24}}/>
      }}/>
    </Stack>
  );
}
