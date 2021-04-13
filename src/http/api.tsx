import env from "../screens/env";

import axios from "axios";

const API = axios.create({
  baseURL: env.API_URL,
  headers: { 'Content-Type': 'application/json' },
});


export const sendPhoto = async (photo:string) => {
  const res = await axios.post<{message: string}>('https://flutter-test.redentu.com/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: photo 
  });
  return res;
};

