import {StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native';
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
    renderLabel={({route, focused, color}) => (
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
      <ItemListProfile text="Edit Profile" />
      <ItemListProfile text="Home Address" />
      <ItemListProfile text="Security" />
      <ItemListProfile text="Payment" />
      <ItemListProfile text="SignOut" onPress={signOut} />
    </View>
  );
};

const FoodMarket = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListProfile text="Rate App" />
      <ItemListProfile text="Help Center" />
      <ItemListProfile text="Privacy & Policy" />
      <ItemListProfile text="Terms & Conditions" />
    </View>
  );
};

const renderScene = SceneMap({
  1: Account,
  2: FoodMarket,
});

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'FoodMarket'},
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

const styles = StyleSheet.create({});
