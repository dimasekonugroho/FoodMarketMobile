import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  Header,
  ItemListFood,
  ItemValue,
  Loading,
} from '../../component';
import Axios from 'axios';
import {getData} from '../../utils';
import {API_HOST} from '../../config';
import {WebView} from 'react-native-webview';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const [isPaypentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaypentURL] = useState('https://google.com');

  // proses checkout
  const onCheckout = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };

    // pemanggilan TOKEN
    getData('token').then(resToken => {
      // pemanggilan API Checkout
      Axios.post(`${API_HOST.url}/checkout`, data, {
        headers: {
          Authorization: resToken.value,
        },
      })
        .then(res => {
          console.log('checkout success: ', res.data);
          setIsPaymentOpen(true);
          setPaypentURL(res.data.data.payment_url);
        })
        .catch(err => {
          console.log('error checkout: ', err);
        });
    });
  };

  const onNavChange = state => {
    console.log('nav: ', state);
    // const urlSuccess = 'https://google.com';
    const titleWeb = 'Laravel';
    if (state.title === titleWeb) {
      navigation.reset({index: 0, routes: [{name: 'SuccessOrder'}]});
    }
  };

  if (isPaypentOpen) {
    // webview pembayaran mitrans
    return (
      <>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          // onBack={() => navigation.goBack()}
          onBack={() => setIsPaymentOpen(false)}
        />
        <WebView
          source={{uri: paymentURL}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onNavigationStateChange={onNavChange}
        />
      </>
    );
  }

  return (
    <ScrollView>
      <View>
        <Header
          title="Order Summary"
          subTitle="You deserve better meal"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemListFood
            image={{uri: item.picturePath}}
            type="order-summary"
            name={item.name}
            price={item.price}
            items={transaction.totalItem}
          />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue
            label={item.name}
            value={transaction.totalPrice}
            type="currency"
          />
          <ItemValue
            label="Driver"
            value={transaction.driver}
            type="currency"
          />
          <ItemValue label="Tax 10%" value={transaction.tax} type="currency" />
          <ItemValue
            label="Total Price"
            value={transaction.total}
            valueColor="#1ABC9C"
            type="currency"
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.label}>Deliver to:</Text>
          <ItemValue label="Name" value={userProfile.name} />
          <ItemValue label="Phone No." value={userProfile.phoneNumber} />
          <ItemValue label="Adddess" value={userProfile.address} />
          <ItemValue label="House No." value={userProfile.houseNumber} />
          <ItemValue label="City" value={userProfile.city} />
        </View>

        <View style={styles.button}>
          <Button text="Checkout Now" onPress={onCheckout} />
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderSummary;

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
