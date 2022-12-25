import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, ItemListFood, ItemValue} from '../../component';
import {getData} from '../../utils';
import {Axios} from 'axios';

const OrderDetail = ({route, navigation}) => {
  const {} = route.params;

  const onCancel = () => {
    const data = {
      status: 'CANCELLED',
    };
    getData('token').then(resToken => {
      Axios.post(`${API_HOST.url}/transaction/${order.id}`, data, {
        headers: {
          Authorization: resToken.value,
        },
      })
        .then(res => {
          console.log('success cancel order: ', res);
          navigation.reset({
            index: 0,
            routes: [{name: 'MainApp'}],
          });
        })
        .catch(err => {
          console.log('err: ', err);
        });
    });
  };
  return (
    <ScrollView>
      <View>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemListFood
            image={{uri: order.food.picturePath}}
            type="order-summary"
            name={order.food.name}
            price={order.food.price}
            items={order.quantity}
          />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue
            label={order.food.name}
            value={order.food.price * order.quantity}
            type="currency"
          />
          <ItemValue label="Driver" value={50000} type="currency" />
          <ItemValue
            label="Tax 10%"
            value={(10 / 100) * order.total}
            type="currency"
          />
          <ItemValue
            label="Total Price"
            value={order.total}
            valueColor="#1ABC9C"
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.label}>Deliver to:</Text>
          <ItemValue label="Name" value={order.user.name} />
          <ItemValue label="Phone No." value={order.user.phoneNumber} />
          <ItemValue label="Adddess" value={order.user.address} />
          <ItemValue label="House No." value={order.user.houseNumber} />
          <ItemValue label="City" value={order.user.city} />
        </View>

        <View style={styles.content}>
          <Text style={styles.label}>Order Status:</Text>
          <ItemValue
            label={`#${order.id}`}
            value={order.status}
            valueColor={order.status === 'CANCELLED' ? '#D9435E' : '#1ABC9C'}
          />
        </View>

        <View style={styles.button}>
          {order.status === 'PENDING' && (
            <Button
              text="Cancel My Order"
              onPress={onCancel}
              color="#D9435E"
              textColor="white"
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {paddingHorizontal: 24, paddingBottom: 24, marginTop: 24},
});
