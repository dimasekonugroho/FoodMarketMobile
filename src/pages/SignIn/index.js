import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, TextInput} from '../../component';
import {useForm} from '../../utils';
import Axios from 'axios';

const SignIn = ({navigation}) => {
  /*
  // menggunakan useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  */

  // menggunakan custom Hooks
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log('form: ', form);
    Axios.post('http://foodmarket-backend.buildwithangga.id/api/login', form)
      .then(res => {
        console.log('success', res);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find yor best ever meal" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Enter Your Email Address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button text="Sign In" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          text="Crete New Account"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
