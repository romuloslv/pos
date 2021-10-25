import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  Button,
} from "native-base"

export const List_Contact = () => {
    const navigation = useNavigation(); 

  const data = [
    {
      id: "01",
      fullName: "Contact 1",
      recentText: "Lorem ipsum dolor sit",
      avatarUrl: "https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia360-4.png",
    },
    {
      id: "02",
      fullName: "Contact 2",
      recentText: "Consequatur rerum amet fuga expedita",
      avatarUrl: "https://img.r7.com/images/rosto-humano-irreal-inteligencia-artificial-19022019142839436",
    },
    {
      id: "03",
      fullName: "Contact 3",
      recentText: "Incidunt vitae quae facere",
      avatarUrl: "https://img.r7.com/images/rosto-humano-irreal-inteligencia-artificial-19022019142837823",
    },
    {
      id: "04",
      fullName: "Contact 4",
      recentText: "enetur laborum quod cum",
      avatarUrl: "https://super.abril.com.br/wp-content/uploads/2019/02/tecnologia-ia-rostos-02.png",
    },
    {
      id: "05",
      fullName: "Contact 5",
      recentText: "Ad dolore dignissimos asperiores",
      avatarUrl: "https://www.showmetech.com.br/wp-content/uploads//2019/09/000059.jpg",
    },
  ]

  return (
    <Box
      w={{
        base: "100%",
        md: "25%",
      }}
    >
      <Heading fontSize="xl" p="4" >
        Contacts
      </Heading>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.fullName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button size="sm" variant="subtle" marginTop ="5px" onPress={() => navigation.navigate('Create_Contact')}>Add</Button>
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex="1" >
        <List_Contact />
      </Center>
    </NativeBaseProvider>
  )
}