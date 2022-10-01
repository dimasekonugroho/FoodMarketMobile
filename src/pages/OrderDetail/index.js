import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, ItemListFood, ItemValue} from '../../component';
import {foodDummy1} from '../../assets';

const OrderDetail = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          onBack={() => {}}
        />
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemListFood
            image={foodDummy1}
            type="order-summary"
            name="Makanan"
            price="100.000"
            items={14}
          />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue label="Makanan" value="Rp 12.345.000" />
          <ItemValue label="Driver" value="Rp 50.000" />
          <ItemValue label="Tax 10%" value="RP 1.234.500" />
          <ItemValue
            label="Total Price"
            value="Rp. 123.456.789"
            valueColor="#1ABC9C"
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.label}>Deliver to:</Text>
          <ItemValue label="Name" value="Dimas Eko" />
          <ItemValue label="Phone No." value="085710105917" />
          <ItemValue label="Adddess" value="Jl. Swabhakti" />
          <ItemValue label="House No." value="D2 no. 02" />
          <ItemValue label="City" value="Tangerang Selatan" />
        </View>

        <View style={styles.content}>
          <Text style={styles.label}>Order Status:</Text>
          <ItemValue label="#FM209391" value="Paid" valueColor="#1ABC9C" />
        </View>

        <View style={styles.button}>
          <Button
            text="Cancel My Order"
            onPress={() => navigation.replace('SuccessOrder')}
            color="#D9435E"
            textColor="white"
          />
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
