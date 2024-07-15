import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import axios from "axios";
import colors from "../styles/colors";
import { FontAwesome } from "@expo/vector-icons";

const MovieSearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchMovies = () => {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "a520f6649e1e7edb60df012a861af46c",
          query,
        },
      })
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity style={styles.searchBarButton} onPress={searchMovies}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() =>
              navigation.navigate("MovieDetail", { movieId: item.id })
            }
          >
            <Image
              style={styles.poster}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
            />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  searchBar: {
    height: 40,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchBarButton: { position: "absolute", right: 10, top: 10 },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black,
  },
});

export default MovieSearchScreen;
