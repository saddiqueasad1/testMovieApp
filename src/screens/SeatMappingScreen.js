import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SeatMappingScreen = () => {
  const seats = Array(10).fill(Array(10).fill(false));

  return (
    <View>
      {seats.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((seat, seatIndex) => (
            <TouchableOpacity key={seatIndex} style={styles.seat}>
              <Text>{seatIndex + 1}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  seat: {
    width: 30,
    height: 30,
    backgroundColor: 'gray',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SeatMappingScreen;
