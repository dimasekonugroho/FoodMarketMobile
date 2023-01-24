import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListProduct from '../ItemListProduct';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDataByTypes} from '../../../redux/action';

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

const KabelData = () => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {kabelData} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getProductDataByTypes('kabel_data'));
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getProductDataByTypes('kabel_data'));
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={{paddingTop: 8, paddingHorizontal: 10}}>
        {kabelData.map(item => {
          return (
            <ItemListProduct
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              rating={item.rate}
              image={{uri: item.picturePath}}
              onPress={() => navigation.navigate('ProductDetail', item)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const Powerbank = () => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {powerbank} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getProductDataByTypes('powerbank'));
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getProductDataByTypes('powerbank'));
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={{paddingTop: 8, paddingHorizontal: 10}}>
        {powerbank.map(item => {
          return (
            <ItemListProduct
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              rating={item.rate}
              image={{uri: item.picturePath}}
              onPress={() => navigation.navigate('ProductDetail', item)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const Handsfree = () => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {handsfree} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getProductDataByTypes('handsfree'));
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getProductDataByTypes('handsfree'));
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={{paddingTop: 8, paddingHorizontal: 10}}>
        {handsfree.map(item => {
          return (
            <ItemListProduct
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              rating={item.rate}
              image={{uri: item.picturePath}}
              onPress={() => navigation.navigate('ProductDetail', item)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const Speaker = () => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {speaker} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getProductDataByTypes('speaker'));
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getProductDataByTypes('speaker'));
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={{paddingTop: 8, paddingHorizontal: 10}}>
        {speaker.map(item => {
          return (
            <ItemListProduct
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              rating={item.rate}
              image={{uri: item.picturePath}}
              onPress={() => navigation.navigate('ProductDetail', item)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const TravelCharger = () => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {travelCharger} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getProductDataByTypes('travel_charger'));
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getProductDataByTypes('travel_charger'));
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={{paddingTop: 8, paddingHorizontal: 10}}>
        {travelCharger.map(item => {
          return (
            <ItemListProduct
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              rating={item.rate}
              image={{uri: item.picturePath}}
              onPress={() => navigation.navigate('ProductDetail', item)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: KabelData,
  2: Powerbank,
  3: Handsfree,
  4: Speaker,
  5: TravelCharger,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Kabel Data'},
    {key: '2', title: 'Powerbank'},
    {key: '3', title: 'Handsfree'},
    {key: '4', title: 'Speaker'},
    {key: '5', title: 'Travel Charger'},
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

export default HomeTabSection;

const styles = StyleSheet.create({});
