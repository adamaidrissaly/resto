import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

export default function ViewCart() {
  const [modalVisible, setModalVisible] = useState(false);

  const { items, restaurantName } = useSelector(
    (state) => state.CartReducer.selectedItems
  );

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

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0, 0 , 0, 0.7 )",
    },

    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 450,
      borderWidth: 1,
    },

    restaurantName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 20,
      marginBottom: 10,
    },

    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },

    subtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
  });

  // console.log(totalUSD);

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}> {restaurantName} </Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>SubTotal</Text>
              <Text> ${totalUSD} </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "black",
                  borderRadius: 30,
                  width: 300,
                  padding: 12,
                  alignItems: "center",
                  position: "relative",
                  marginTop: 20,
                }}
                onPress={() => setModalVisible(false) }
              >
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "700" }}
                >
                  CheckOut
                </Text>
                <Text style={{
                  position: "absolute",
                  right: 20,
                  color: 'white',
                  fontSize: 16,
                  top: 14
                }}> ${total ? totalUSD : ""} </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
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
              onPress={() => setModalVisible(true)}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  marginRight: 30,
                  fontWeight: "800",
                }}
              >
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>
                {" "}
                ${totalUSD}{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
