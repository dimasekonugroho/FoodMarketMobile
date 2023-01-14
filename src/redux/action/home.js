import {showMessage} from '../../utils';

const {default: Axios} = require('axios');
const {API_HOST} = require('../../config');

export const getFoodData = () => dispatch => {
  Axios.get(`${API_HOST.url}/food`)
    .then(res => {
      console.log('data header food: ', res.data.data.data);
      dispatch({type: 'SET_FOOD', value: res.data.data.data});
    })
    .catch(err => {
      // console.log('err: ', err);
      showMessage(
        `${err?.response?.data?.message} on food API` ||
          'Terjadi kesalahan di API food',
      );
    });
};

export const getFoodDataByTypes = types => dispatch => {
  Axios.get(`${API_HOST.url}/food?types=${types}`)
    .then(res => {
      if (types === 'new') {
        console.log('new: ', res.data.data.data);
        dispatch({type: 'SET_NEW_TASTE', value: res.data.data.data});
      }
      if (types === 'popular') {
        console.log('popular: ', res.data.data.data);
        dispatch({type: 'SET_POPULAR', value: res.data.data.data});
      }
      if (types === 'recommended') {
        console.log('recommended: ', res.data.data.data);
        dispatch({type: 'SET_RECOMMENDED', value: res.data.data.data});
      }
    })
    .catch(err => {
      // console.log('err: ', err);
      showMessage(
        `${err?.response?.data?.message} on food By Type API` ||
          'Terjadi kesalahan di API food By Type',
      );
    });
};
