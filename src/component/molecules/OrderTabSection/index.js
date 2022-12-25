import {StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {foodDummy1, foodDummy2, foodDummy3, foodDummy4} from '../../../assets';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getInProgress, getPastOrders} from '../../../redux/action';

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
  const dispatch = useDispatch();
  const {inProgress} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getInProgress());
  }, []);

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {inProgress.map(order => {
        return (
          <ItemListFood
            key={order.id}
            image={{uri: order.food.picturePath}}
            onPress={() => navigation.navigate('OrderDetail', order)}
            type="in-progress"
            items={order.quantity}
            name={order.food.name}
            price={order.total}
          />
        );
      })}
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pastOrders} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getPastOrders());
  }, []);

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {pastOrders.map(order => {
        return (
          <ItemListFood
            key={order.id}
            image={{uri: order.food.picturePath}}
            onPress={() => navigation.navigate('OrderDetail', order)}
            type="past-orders"
            items={order.quantity}
            name={order.food.name}
            price={order.total}
            date={order.created_at}
            status={order.status}
          />
        );
      })}
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
