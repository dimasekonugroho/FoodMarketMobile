import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {profileDummy} from '../../../assets';
import {getData} from '../../../utils';

const HomeProfile = () => {
  const [photo, setPhoto] = useState(profileDummy);
  useEffect(() => {
    getData('userProfile').then(res => {
      console.log('user profile: ', res);
      setPhoto({uri: res.profile_photo_url});
    });
  }, []);

  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);

  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.hallo}>Hallo {userProfile.name}!</Text>
        <Text style={styles.desc}>Welcome to </Text>
        <Text style={styles.appName}>Wellcomm Store</Text>
      </View>
      <Image source={photo} style={styles.profile} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  appName: {
    fontSize: 17,
    fontWeight: '900',
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  desc: {fontSize: 10, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  hallo: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    paddingBottom: 10,
  },
  profile: {width: 70, height: 70, borderRadius: 10},
});
