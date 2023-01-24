import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../component';
import {API_HOST} from '../../config';
import {getData, showMessage, storeData, useForm} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';

const EditProfile = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const onSubmit = () => {
    let resultObj = {};
    Object.keys(form).map(obj => {
      if (form[obj]) {
        resultObj[obj] = form[obj];
      }
    });

    getData('token').then(resToken => {
      Axios.post(`${API_HOST.url}/user`, resultObj, {
        headers: {
          Authorization: resToken.value,
        },
      })
        .then(res => {
          showMessage('Update Success', 'success');
          storeData('userProfile', res.data.data).then(() => {
            navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
          });
        })
        .catch(err => {
          showMessage(
            `${err?.response?.data?.message} on Update Profile API` ||
              'Terjadi kesalahan di API Update Profile',
          );
        });
    });
  };

  const [userProfile, setUserProfile] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    navigation.addListener('focus', () => {
      updateUserProfile();
    });
  }, [navigation]);

  const updateUserProfile = () => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  };

  const updatePhoto = () => {
    launchImageLibrary(
      {
        quality: 0.7,
        maxWidth: 200,
        maxHeight: 200,
      },
      response => {
        if (response.didCancel || response.error) {
          showMessage('Anda tidak memilih photo');
        } else {
          const source = {uri: 'response.uri'};
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };

          response.assets.map(asset => {
            source.uri = asset.uri;
            dataImage.uri = asset.uri;
            dataImage.type = asset.type;
            dataImage.name = asset.fileName;
          });

          const photoForUpload = new FormData();
          photoForUpload.append('file', dataImage);
          getData('token').then(resToken => {
            Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
              headers: {
                Authorization: resToken.value,
                'Content-Type': 'multipart/form-data',
              },
            })
              .then(res => {
                getData('userProfile').then(resUser => {
                  showMessage('Update Photo Berhasil', 'success');
                  resUser.profile_photo_url = `${API_HOST.storage}/${res.data.data[0]}`;
                  storeData('userProfile', resUser).then(() => {
                    updateUserProfile();
                  });
                });
              })
              .catch(err => {
                showMessage(
                  `${err?.response?.data?.message} on Update Photo API` ||
                    'Terjadi kesalahan di API Update Photo',
                );
              });
          });
        }
      },
    );
  };

  const onRefresh = () => {
    setRefreshing(true);
    updateUserProfile();
    setRefreshing(false);
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onBack={() => navigation.goBack()} />
      <ScrollView
        contentContainerStyle={styles.scroll}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity onPress={updatePhoto}>
              <View style={styles.borderPhoto}>
                <Image
                  source={{uri: userProfile.profile_photo_url}}
                  style={styles.photoContainer}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.addPhoto}>Update Photo</Text>
          </View>
          <TextInput
            label="Full Name"
            placeholder="Type your full name"
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Email Address"
            placeholder="Type your email address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Phone Number"
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={24} />
          <Button text="Update" onPress={onSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  scroll: {flexGrow: 1},
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 10,
    flex: 1,
  },
  addPhoto: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 16,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  photo: {
    alignItems: 'center',
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
});
