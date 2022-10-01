import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Select, TextInput} from '../../component';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Address"
        subTitle="Make sure it's valid!"
        onBack={() => {}}
      />
      <ScrollView>
        <View style={styles.container}>
          <TextInput label="Phone No." placeholder="Enter Your Phone Number" />
          <Gap height={16} />
          <TextInput label="Address" placeholder="Enter Your Address" />
          <Gap height={16} />
          <TextInput label="House No." placeholder="Enter your House Number" />
          <Gap height={16} />
          <Select label="City" />
          <Gap height={24} />
          <Button
            text="Sign Up Now"
            onPress={() => navigation.replace('SuccessSignUp')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpAddress;

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
