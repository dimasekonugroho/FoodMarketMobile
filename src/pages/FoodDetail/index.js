import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {IcBackWhite} from '../../assets';
import {Button, Counter, Number, Rating} from '../../component';
import OrderSummary from '../OrderSummary';
import {getData} from '../../utils';

const FoodDetail = ({navigation, route}) => {
  const {id, name, picturePath, description, ingredients, rate, price} =
    route.params;
  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});

  // mengambil data user
  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  });

  // perhitungan harga
  const onCounterChange = value => {
    // console.log('Counter: ', value);
    setTotalItem(value);
  };

  // proses order now
  const onOrder = () => {
    const totalPrice = totalItem * price;
    const driver = 10000;
    const tax = (10 / 100) * totalPrice;
    const total = totalPrice + driver + tax;

    const data = {
      item: {
        id: id,
        name: name,
        price: price,
        picturePath: picturePath,
      },
      transaction: {
        totalItem: totalItem,
        totalPrice: totalPrice,
        driver: driver,
        tax: tax,
        total: total,
      },
      userProfile,
    };

    console.log('data order: ', data);
    navigation.navigate('OrderSummary', data);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <ImageBackground source={{uri: picturePath}} style={styles.cover}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}>
            <IcBackWhite />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.content}>
          <View style={styles.mainContent}>
            <View style={styles.productContainer}>
              <View>
                <Text style={styles.title}>{name}</Text>
                <Rating number={rate} />
              </View>

              {/* hitungaan */}
              <Counter onValueChange={onCounterChange} />
            </View>
            <Text style={styles.desc}>{description}</Text>
            <Text style={styles.label}>Ingredients:</Text>
            <Text style={styles.desc}>{ingredients}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.priceContainer}>
              <Text style={styles.labelTotal}>Total Price:</Text>
              <Number number={totalItem * price} style={styles.priceTotal} />
            </View>
            <View style={styles.button}>
              <Button text="Order Now" onPress={onOrder} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {height: 330, paddingTop: 26, paddingLeft: 22},
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -30,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {flex: 1},
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  footer: {flexDirection: 'row', paddingVertical: 16, alignItems: 'center'},
  priceContainer: {flex: 1},
  button: {width: 163},
  labelTotal: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  priceTotal: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
});
