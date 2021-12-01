import React from "react";
import { useGetCryptoListQuery } from "app/modules/crypto";

const CurrencyList = (props) => {
  const { data } = useGetCryptoListQuery();

  // return <div>{list.map((item) => JSON.stringify(item))}</div>;
  return <div>{JSON.stringify(data)}</div>;
};

CurrencyList.propTypes = {};

export default CurrencyList;
