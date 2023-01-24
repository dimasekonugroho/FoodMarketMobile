import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProfileTabSection} from '../../component';
import {getData} from '../../utils';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
          <Image
            source={{uri: userProfile.profile_photo_url}}
            style={styles.photoContainer}
          />
        </View>
        <View style={styles.profile}>
          <Text style={styles.name}>{userProfile.name}</Text>
          <Text style={styles.email}>{userProfile.email}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1, marginTop: 10},
  profileDetail: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  profile: {
    paddingLeft: 20,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    textAlign: 'left',
  },
  email: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'left',
  },
  photo: {alignItems: 'center', marginVertical: 20},
  photoContainer: {
    width: 70,
    height: 70,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
});
