import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
  Text,
  Image,
  Button,
} from "native-base"

export const Create_User = () => {
    const navigation = useNavigation(); 
    return (
    <Box
      w={{
        base: "90%",
        md: "25%",
      }}
    >
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>Name</FormControl.Label>
          <Input type="text" placeholder=""/>
          <FormControl.Label>ID</FormControl.Label>
          <Input type="number" placeholder=""/>
          <FormControl.Label>E-mail</FormControl.Label>
          <Input type="email" placeholder="" />
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" placeholder="" />
          <FormControl.HelperText>Use 8 characters or more for your password</FormControl.HelperText>
          <Button size="sm" variant="subtle" marginTop ="5px" onPress={() => navigation.navigate('Login')}>Save</Button>
        </Stack>
      </FormControl>
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Create_User />
      </Center>
    </NativeBaseProvider>
  )
}