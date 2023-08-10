import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
} from "react-native";
import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";
import {
  CircleButton,
  RectButton,
  FocusedStatusBar,
  SubInfo,
  DetailsDesc,
  DetailsBid,
  DetailsHeader,
} from "../components";

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View
              style={{
                padding: SIZES.font,
              }}
            >
              <DetailsDesc data={data} />
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
