import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
const ds = [
  {
    img: require("../assets/ca_nau_lau.png"),
    tensp: "Ca nấu lẩu, nấu mì",
    tenshop: "Shop Devang",
  },
  {
    img: require("../assets/ga_bo_toi.png"),
    tensp: "1KG khô gà bơ tỏi",
    tenshop: "LTD Food",
  },
  {
    img: require("../assets/do_choi_dang_mo_hinh.png"),
    tensp: "Đồ chơi dạng mô hình",
    tenshop: "Shop thế giới đồ chơi",
  },
  {
    img: require("../assets/xa_can_cau.png"),
    tensp: "Xe cần cẩu",
    tenshop: "Shop thế giới đồ chơi",
  },
  {
    img: require("../assets/lanh_dao_gian_don.png"),
    tensp: "Lãnh đạo giản đơn",
    tenshop: "Minh Đức Book",
  },
];

function Tiki() {
  return (
    <SafeAreaView className="flex-1 bg-slate-300">
      <Text className="font-bold text-4 m-2 ">
        Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop
      </Text>
      <FlatList
        className="flex-1 mt-2"
        data={ds}
        renderItem={({ item }) => (
          <View className="flex-row mt-2 bg-white ">
            <Image className="w-[100px] h-[100px] " source={item.img} />
            <View className="p-6 text-center">
              <Text className="w-[100px]">{item.tensp}</Text>
              <Text className="w-[100px]">{item.tenshop}</Text>
            </View>
            <TouchableOpacity className="flex-row mt-5 ml-10 shadow-sm py-2 justify-center items-center bg-red-600 w-[100px] h-[50px]">
              <Text className="flex-1 text-white font-bold uppercase text-center">
                Chat
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
export default Tiki;
