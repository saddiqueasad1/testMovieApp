import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const MovieDetailScreen = ({ route, navigation }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      params: {
        api_key: 'a520f6649e1e7edb60df012a861af46c'
      }
    }).then(response => {
      setMovie(response.data);
    
    }).catch(error => {
      console.error(error);
    });
  }, [movieId]);

  if (!movie) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.poster} />
      <Text style={styles.title}>{movie.title}</Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Get Tickets pressed')}>
        <Text style={styles.buttonText}>Get Tickets</Text>
      </TouchableOpacity>
      {trailerUrl && (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Trailer', { trailerUrl })}>
          <Text style={styles.buttonText}>Watch Trailer</Text>
        </TouchableOpacity>
      )}
      <View style={styles.genresContainer}>
        {movie.genres.map((genre) => (
          <Text key={genre.id} style={styles.genre}>
            {genre.name}
          </Text>
        ))}
      </View>
      <Text style={styles.overview}>{movie.overview}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  poster: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
  },
  genre: {
    backgroundColor: '#eee',
    borderRadius: 5,
    padding: 5,
    margin: 5,
    fontSize: 14,
  },
  overview: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default MovieDetailScreen;
