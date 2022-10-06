import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcNext} from '../../../assets';

const ItemListProfile = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <IcNext />
      </View>
    </TouchableOpacity>
  );
};

export default ItemListProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },
  text: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#020202'},
});
