import {showMessage} from '../../utils';

const {default: Axios} = require('axios');
const {API_HOST} = require('../../config');

export const getEventData = () => dispatch => {
  Axios.get(`${API_HOST.url}/event`)
    .then(res => {
      // console.log('data event: ', res.data.data.data);
      dispatch({type: 'SET_EVENT', value: res.data.data.data});
    })
    .catch(err => {
      // console.log('err: ', err);
      showMessage(
        `${err?.response?.data?.message} on Event API` ||
          'Terjadi kesalahan di API Event',
      );
    });
};

export const getProductDataByTypes = types => dispatch => {
  Axios.get(`${API_HOST.url}/product?types=${types}`)
    .then(res => {
      if (types === 'kabel_data') {
        // console.log('kabel_data: ', res.data.data.data);
        dispatch({type: 'SET_KABEL_DATA', value: res.data.data.data});
      }
      if (types === 'powerbank') {
        // console.log('powerbank: ', res.data.data.data);
        dispatch({type: 'SET_POWERBANK', value: res.data.data.data});
      }
      if (types === 'handsfree') {
        // console.log('handsfree: ', res.data.data.data);
        dispatch({type: 'SET_HANDSFREE', value: res.data.data.data});
      }
      if (types === 'speaker') {
        // console.log('speaker: ', res.data.data.data);
        dispatch({type: 'SET_SPEAKER', value: res.data.data.data});
      }
      if (types === 'travel_charger') {
        // console.log('travel_charger: ', res.data.data.data);
        dispatch({type: 'SET_TRAVEL_CHARGER', value: res.data.data.data});
      }
    })
    .catch(err => {
      // console.log('err: ', err);
      showMessage(
        `${err?.response?.data?.message} on product By Type API` ||
          'Terjadi kesalahan di API product By Type',
      );
    });
};
