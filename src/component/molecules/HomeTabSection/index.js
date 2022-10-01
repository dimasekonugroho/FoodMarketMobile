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

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating={3}
        image={foodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        name="Makanan"
        price="100.000"
      />
      <ItemListFood
        rating={3}
        image={foodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        name="Makanan"
        price="100.000"
      />
      <ItemListFood
        rating={3}
        image={foodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        name="Makanan"
        price="100.000"
      />
      <ItemListFood
        rating={3}
        image={foodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        name="Makanan"
        price="100.000"
      />
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating={3}
        image={foodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        name="Makanan"
        price="100.000"
      />
      <ItemListFood
        rating={3}
        image={foodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        name="Makanan"
        price="100.000"
      />
      <ItemListFood
        rating={3}
        image={foodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        name="Makanan"
        price="100.000"
      />
      <ItemListFood
        rating={3}
        image={foodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        name="Makanan"
        price="100.000"
      />
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating={3}
        image={foodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        name="Makanan"
        price="100.000"
      />
      <ItemListFood
        rating={3}
        image={foodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        name="Makanan"
        price="100.000"
      />
    </View>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recommended,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
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
