import Axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Select, TextInput} from '../../component';
import {API_HOST} from '../../config';
import {getData, showMessage, storeData, useForm} from '../../utils';

const EditPassUser = ({navigation}) => {
  const [form, setForm] = useForm({
    address: '',
    houseNumber: '',
    city: '',
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
          storeData('userPassUser', res.data.data).then(() => {
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
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.page}>
        <Header title="Edit Home Profile" onBack={() => navigation.goBack()} />
        <View style={styles.container}>
          <TextInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House Number"
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button text="Update" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditPassUser;

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
});
