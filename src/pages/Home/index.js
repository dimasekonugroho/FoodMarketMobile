import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {EventCard, Gap, HomeProfile, HomeTabSection} from '../../component';
import {getEventData} from '../../redux/action';

const Home = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const {event} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getEventData());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getEventData());
    setRefreshing(false);
  };

  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={styles.eventCardContainer}>
            <Gap width={15} />
            {event.map(itemEvent => {
              return (
                <EventCard
                  key={itemEvent.id}
                  image={{uri: itemEvent.picturePath}}
                  onPress={() => navigation.navigate('EventDetail', itemEvent)}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  eventCardContainer: {flexDirection: 'row', marginVertical: 12},
  tabContainer: {flex: 1},
});
