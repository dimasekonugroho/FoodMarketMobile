import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {IcWellcomm} from '../../assets';
import {getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 2000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#ffc700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <IcWellcomm style={{width: 180, height: 180}} />
      <View style={{height: 30}} />
      <Text
        style={{fontSize: 27, color: '#020202', fontFamily: 'Poppins-Medium'}}>
        WELLCOMM
      </Text>
      <Text
        style={{fontSize: 50, color: '#020202', fontFamily: 'Poppins-Medium'}}>
        STORE
      </Text>
    </View>
  );
};

export default SplashScreen;
