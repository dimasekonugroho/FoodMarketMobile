import {StyleSheet, Text, View, useWindowDimensions, Alert} from 'react-native';
// import {Divider} from 'react-native-paper';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import ItemListProfile from '../ItemListProfile';
import AsyncStorage from '@react-native-async-storage/async-storage';

//custom tab-bar
const renderTabBar = props => (
  <TabBar
    {...props}
    scrollEnabled
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 2,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const Account = () => {
  const navigation = useNavigation();
  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    });
  };
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListProfile
        text="Edit Profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <ItemListProfile
        text="Home Address"
        onPress={() => navigation.navigate('EditHomeAddress')}
      />
      {/* <ItemListProfile
        text="Security"
        onPress={() => navigation.navigate('EditPassUser')}
      /> */}
      <Text></Text>
      <ItemListProfile
        text="Sign Out"
        onPress={() =>
          Alert.alert('Sign Out', 'Are you sure, do you want to sign out?', [
            {text: 'No', onPress: () => console.log('Button No')},
            {text: 'Yes', onPress: () => signOut()},
          ])
        }
      />
    </View>
  );
};

const AboutApps = () => {
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <View style={styles.content}>
        <View style={styles.productContainer}>
          <View>
            <Text style={styles.desc}>
              Aplikasi ini dibuat untuk memenuhi salah satu persyaratan
              memperoleh gelar Sarjana Komputer (S.Kom)
            </Text>
          </View>
        </View>
        <Text style={styles.desc}>Dibuat Oleh:</Text>
        <Text style={styles.title}>Dimas Eko Nugroho</Text>
        <Text style={styles.title}>1811510336</Text>
      </View>
    </View>
  );
};

const renderScene = SceneMap({
  1: Account,
  2: AboutApps,
});

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'About Apps'},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default ProfileTabSection;

const styles = StyleSheet.create({
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
    marginBottom: 10,
  },
});
