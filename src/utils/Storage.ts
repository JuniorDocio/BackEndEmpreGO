import AsyncStorage from "@react-native-async-storage/async-storage";

export class AppStorage {
  public static async storeData(key: string, value: any): Promise<void> {
    try {
      value = JSON.stringify(value);
      await AsyncStorage.setItem(key, value);
    }
    catch(err) {
      console.error('Unable to store data on local storage: ' + err);
    }

    console.info(`STORED KEY: ${key}, VALUE: ${value} on local storage.`);
  }

  public static async readData(key: string): Promise<string | null> {
    let value = null;
    try {
      value = await AsyncStorage.getItem(key);
    }
    catch(err) {
      console.error('Unable to retrieve data from local storage: ' + err);
    }

    console.info(`READING KEY: ${key}, VALUE: ${value} from local storage.`);

    return value;
  }

  public static async deleteData(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    }
    catch(err) {
      console.error('Unable to delete data from local storage: ' + err);
    }

    console.info(`DELETED KEY: ${key} from local storage.`);
  }
}