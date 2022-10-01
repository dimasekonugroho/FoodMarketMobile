import {StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {foodDummy1, foodDummy2, foodDummy3, foodDummy4} from '../../../assets';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';

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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating={3}
        image={foodDummy1}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        name="Makanan"
        price="2.000.000"
      />
      <ItemListFood
        rating={3}
        image={foodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        name="Makanan"
        price="2.000.000"
      />
      <ItemListFood
        rating={3}
        image={foodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        name="Makanan"
        price="2.000.000"
      />
      <ItemListFood
        rating={3}
        image={foodDummy4}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        name="Makanan"
        price="2.000.000"
      />
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating={3}
        image={foodDummy4}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={3}
        name="Makanan"
        price="2.000.000"
        date="12 June 2022"
        status="Cancel"
      />
      <ItemListFood
        rating={3}
        image={foodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={3}
        name="Makanan"
        price="2.000.000"
        date="13 June 2022"
      />
      <ItemListFood
        rating={3}
        image={foodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={3}
        name="Makanan"
        price="2.000.000"
        date="14 June 2022"
        status="Cancel"
      />
    </View>
  );
};

const renderScene = SceneMap({
  1: InProgress,
  2: PastOrders,
});

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
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

export default OrderTabSection;

const styles = StyleSheet.create({});
