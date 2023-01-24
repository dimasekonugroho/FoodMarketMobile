import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Header} from '../../component';
import {getData} from '../../utils';

const EventDetail = ({navigation, route}) => {
  const {id, name, picturePath, description} = route.params;
  const [userProfile, setUserProfile] = useState({});

  // mengambil data user
  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Header title="Events" onBack={() => navigation.goBack()} />
        <Image source={{uri: picturePath}} style={styles.cover} />
        <View style={styles.content}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>{name}</Text>
            </View>
          </View>
          <Text style={styles.desc}>{description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default EventDetail;

const styles = StyleSheet.create({
  page: {backgroundColor: 'white', height: '100%'},
  cover: {
    width: '100%',
    height: 180,
  },
  content: {
    marginTop: 10,
    paddingTop: 26,
    paddingHorizontal: 16,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
});
