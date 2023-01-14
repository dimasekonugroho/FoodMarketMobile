import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../component';
import {useForm} from '../../utils';
import {useDispatch} from 'react-redux';
import {signInAction} from '../../redux/action/auth';

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

  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(signInAction(form, navigation));
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Wellcomm Store" />
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
