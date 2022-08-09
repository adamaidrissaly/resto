import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function ViewCart() {
  const items = useSelector((state) => state.CartReducer.selectedItems.items);

  // '$13.50'
  // '$13.50'
  // Number('13.50') 👉 '13.5'
  // [13.5, 20.5, 19.5]
  //reduce(function) 👉 [13.5, 20.5, 19.5]
  //reduce 👉 13.5 + 20.5 + 19.5 👉 43.5

  const total = items
    .map((items) => Number(items.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  console.log(totalUSD);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        bottom: 10,
        zIndex: 999,
        elevaLion: 10,
        // height: 50,
        // width: '100%'
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "black",
            alignItems: "center",
            padding: 13,
            borderRadius: 30,
            width: 300,
            position: "relative",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
