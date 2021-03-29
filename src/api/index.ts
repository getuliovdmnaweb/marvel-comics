import axios, { AxiosRequestConfig } from "axios";
import { MD5_HASH, PUBLIC_KEY, TIMESTAMP } from "../constants";

const parsedAxios = () => {
  const initialParams = {
    apikey: PUBLIC_KEY,
    ts: TIMESTAMP,
    hash: MD5_HASH,
  };

  return {
    get: async (url: string, params?: AxiosRequestConfig) => {
      const response = await axios.get(url, {
        params: {
          ...initialParams,
          ...params?.params,
        },
      });
      return response.data.data.results;
    },
  };
};

export const api = parsedAxios();
