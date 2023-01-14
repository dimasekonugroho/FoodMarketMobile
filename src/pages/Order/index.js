import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {EmptyOrder, Header, OrderTabSection} from '../../component';
import {useDispatch, useSelector} from 'react-redux';
import {getOrders} from '../../redux/action';

const Order = () => {
  const [isEmpty] = useState(false);
  const dispatch = useDispatch();
  const {orders} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  console.log('list orders: ', orders);
  return (
    <View style={styles.page}>
      {orders.length < 1 ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Your Orders" subTitle="Wait for the best meal" />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1},
  tabContainer: {flex: 1, marginTop: 24},
});
