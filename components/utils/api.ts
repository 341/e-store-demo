import axios from 'axios';
import {API_BASE_URL} from "./config";

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  transformResponse: [function (data: any) {
    return data;
  }],
  // paramsSerializer: function (params: any) {
  //
  //   var qs = require('qs');
  //
  //   var sys = qs.stringify(params, { encodeValuesOnly: true, encode: false});
  //
  //   return sys;
  // },
});

// api.interceptors.request.use(async (config: any) => {
//   const token = await getToken();
//
//   if (token) {
//     config.headers['Authorization'] = 'Bearer ' + token;
//   }
//
//   return config;
// });
