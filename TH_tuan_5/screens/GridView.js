// Example of GridView using FlatList in React Native
// https://aboutreact.com/example-of-gridview-using-flatlist-in-react-native/

// import React in our code
import React, { useEffect, useState } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
} from "react-native";
import { AirbnbRating, Rating } from "react-native-elements";

var ds = [
  {
    img: require("../assets/lanh_dao_gian_don.png"),
  },
  {
    img: require("../assets/dauchuyendoi1.png"),
  },
  {
    img: require("../assets/dau2.png"),
  },
  {
    img: require("../assets/daynguon1.png"),
  },
  {
    img: require("../assets/dau2.png"),
  },
  {
    img: require("../assets/daynguon1.png"),
  },
];
const GridView = () => {
  const [dataSource, setDataSource] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={ds}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              margin: 2,
              padding: 3,
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Image style={styles.imageThumbnail} source={item.img} />
            <Text>Cáp chuyển từ Cổng USB sang PS2...</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Rating
                style={{ paddingRight: 10 }}
                imageSize={15}
                //defaultRating={5}
              />
              <Text>(15)</Text>
            </View>
            <View style={{ display: "flex", flex: 1, flexDirection: "row" }}>
              <Text>69.900 đ</Text>
              <Text className="pl-3">-39%</Text>
            </View>
          </View>
        )}
        //Setting the number of column
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};
export default GridView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 120,
  },
});
