import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import axios from "axios";
import colors from "../styles/colors";

const MovieListScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/upcoming", {
        params: {
          api_key: "a520f6649e1e7edb60df012a861af46c",
        },
      })
      .then((response) => {
        console.log("response2: " + JSON.stringify(response.data.results));
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate("MovieDetail", { movieId: item.id })}
          >
            <Image
              style={styles.poster}
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
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
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  poster: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    color: colors.white, 
    bottom: 10,
  },
});

export default MovieListScreen;
