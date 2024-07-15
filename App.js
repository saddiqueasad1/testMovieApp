import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MovieListScreen from "./src/screens/MovieListScreen";
import MovieDetailScreen from "./src/screens/MovieDetailScreen";
import MovieSearchScreen from "./src/screens/MovieSearchScreen";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import SeatMappingScreen from "./src/screens/SeatMappingScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//new 

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen
        name="MovieList"
        component={TabScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={{ headerShown: true, title: "Detail" }}
      />
    </Stack.Navigator>
    </NavigationContainer>

  );
}

 function TabScreen() {
  return (
      <Tab.Navigator>
        <Tab.Screen
          name="Movies"
          component={MovieListScreen}
          options={{
            title: "Movies",
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  backgroundColor: focused ? "#D1FFBD" : "white",
                  paddingHorizontal: 30,
                  borderRadius: 30,
                  paddingVertical: 5,
                }}
              >
                <FontAwesome name="file-movie-o" size={24} color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="MovieSearch"
          component={MovieSearchScreen}
          options={{
            title: "Search",
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  backgroundColor: focused ? "#D1FFBD" : "white",
                  paddingHorizontal: 30,
                  borderRadius: 30,
                  paddingVertical: 5,
                }}
              >
                <FontAwesome name="search" size={24} color={color} />
              </View>
            ),
          }}
        />
        
        <Tab.Screen
          name="SeatMapping"
          component={SeatMappingScreen}
          options={{
            title: "Seat Mapping",
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  backgroundColor: focused ? "#D1FFBD" : "white",
                  paddingHorizontal: 30,
                  borderRadius: 30,
                  paddingVertical: 5,
                }}
              >
                <FontAwesome name="tv" size={24} color={color} />
              </View>
            ),
          }}
        />
        
      </Tab.Navigator>
  );
}
