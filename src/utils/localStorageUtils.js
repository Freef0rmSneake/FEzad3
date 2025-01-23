import CryptoJS from 'crypto-js';

const SECRET_KEY = 'tajny-klucz'; // Klucz do szyfrowania

// Funkcja do zapisywania zaszyfrowanych danych w localStorage
export const saveToLocalStorage = (key, data) => {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
  localStorage.setItem(key, encryptedData);
};

// Funkcja do odczytywania i deszyfrowania danych z localStorage
export const getFromLocalStorage = (key) => {
  const encryptedData = localStorage.getItem(key);
  if (!encryptedData) return null;
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

// Sprawdź, czy localStorage jest dostępne
export const isLocalStorageAvailable = () => {
  try {
    const testKey = '__test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};