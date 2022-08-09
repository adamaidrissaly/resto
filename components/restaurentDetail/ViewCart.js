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
  const totalUSD = total.toLocaleString("$", {
    style: "currency",
    currency: "USD",
  });

  console.log(totalUSD);

  return (
    <>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            position: "absolute",
            bottom: 10,
            zIndex: 999,
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
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 30, fontWeight: '800' }}>
                View Cart
              </Text>
              <Text style={{color: "white", fontSize: 20}}> ${totalUSD} </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
