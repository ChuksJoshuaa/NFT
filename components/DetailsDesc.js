import { View, Text } from "react-native";
import { useState } from "react";
import { ETHPrice, NFTTitle } from ".";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

const DetailsDesc = ({ data }) => {
  console.log(data);
  return (
    <>
      <View>
        <NFTTitle
          title={data?.name}
          subTitle={data?.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <ETHPrice price={data?.price} />
      </View>
    </>
  );
};

export default DetailsDesc;
