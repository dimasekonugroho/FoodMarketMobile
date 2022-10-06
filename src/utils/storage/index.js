import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from '../showMessege';

export const storeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    // saving error
    showMessage('Gagal menyimpan di local-storage');
  }
};

export const getData = async storageKey => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    showMessage('Gagal mengambil data dari local-storage');
  }
};
