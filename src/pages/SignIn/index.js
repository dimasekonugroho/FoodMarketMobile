import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../component';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find yor best ever meal" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Enter Your Email Address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Enter your password" />
        <Gap height={24} />
        <Button text="Sign In" />
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
