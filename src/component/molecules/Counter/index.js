import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcButtonMin, IcButtonPlus} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IcButtonMin />
      </TouchableOpacity>
      <Text style={styles.value}>14</Text>
      <TouchableOpacity>
        <IcButtonPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  value: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginHorizontal: 10,
  },
});
