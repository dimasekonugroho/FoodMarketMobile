import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const EventCard = ({image, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  container: {
    width: 310,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 15,
  },
  image: {width: 310, height: 150, resizeMode: 'cover'},
  text: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
});
