import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_CRYPTO_URL;

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoList: builder.query({
      query: () => `/currencies`,
    }),
    getPrice: builder.query({
      query: (coin) => `/prices/${coin}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
console.log(cryptoApi);
export const { useGetCryptoListQuery, useGetPriceQuery } = cryptoApi;

export default cryptoApi;
