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

export const Login = () => {
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
          <Center>
          <Image
            source={{
              uri: "https://icon-library.com/images/icon-for-contact/icon-for-contact-2.jpg",
                    }}
               alt="Alternate Text"
              size="lg"
          />
          </Center>
          <FormControl.Label>Login</FormControl.Label>
          <Input type="text" placeholder="type your login" />
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" placeholder="type password here!" />
          <FormControl.HelperText>Use 8 characters or more for your password</FormControl.HelperText>
          <Button size="sm" variant="subtle" marginTop ="5px" onPress={() => navigation.navigate('List_Contact')}>login</Button>
          <Button colorScheme="danger" marginTop ="5px" onPress={() => navigation.navigate('Create_User')}>Sign in</Button>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>Password error</FormControl.ErrorMessage>
        </Stack>
      </FormControl>
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Login />
      </Center>
    </NativeBaseProvider>
  )
}