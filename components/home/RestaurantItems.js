import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommuntyIcons from "react-native-vector-icons/Ionicons";
import React from "react";

export const localRestaurants = [
  {
    name: "Chan Morse",
    image_url:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    categories: ["Diner", "Mil"],
    price: "$$",
    reviwes: 1244,
    rating: 4.5,
  },
  {
    name: "Chawarma",
    image_url:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600",
    categories: ["Plats", "Leger"],
    price: "$$",
    reviwes: 1244,
    rating: 3.5,
  },
  {
    name: "Gaufre",
    image_url:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
    categories: ["Coffe", "Cofe"],
    price: "$$",
    reviwes: 1244,
    rating: 3.5,
  },
  {
    name: "Amberger",
    image_url:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600",
    categories: ["Degener", "Dejener"],
    price: "$$",
    reviwes: 600,
    rating: 2.5,
  },
  {
    name: "Spagety",
    image_url:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
    categories: ["Spagety", ""],
    price: "$$",
    reviwes: 67.99,
    rating: 3.6,
  },
  {
    name: "Salade",
    image_url:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
    categories: ["Salade", "Salade"],
    price: "$$",
    reviwes: 245,
    rating: 4.3,
  },
  {
    name: "Poisson Grier",
    image_url:
      "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600",
    categories: ["Diner", "Poison"],
    price: "$$",
    reviwes: 400,
    rating: 5.0,
  },
  {
    name: "Viande",
    image_url:
      "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600",
    categories: ["Diner", "Viande"],
    price: "$$",
    reviwes: 100,
    rating: 3.2,
  },
  {
    name: "Gateau au Chocolat",
    image_url:
      "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=600",
    categories: ["Deser", "Gateau"],
    price: "$$",
    reviwes_acount: 900,
    rating: 4.9,
  },
];

export default function RestaurantItems({ navigation, ... props }) {
  return (
    <>
      {props.restaurantData &&
        props.restaurantData?.map((restaurant, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={{ marginBottom: 30 }}
            onPress={() =>
              navigation.navigate("RestaurantDatail", {
                name: restaurant.name,
                image: restaurant.image_url,
                price: restaurant.price,
                reviews: restaurant.reviwes_acount,
                rating: restaurant.rating,
                categories: restaurant.categories,
              })
            }
          >
            <View
              style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
            >
              {/* RestorantImage */}
              <RestaurantImage image={restaurant.image_url} />
              {/* RestorantIfos */}
              <RestaurantInfo
                name={restaurant.name}
                rating={restaurant.rating}
              />
            </View>
          </TouchableOpacity>
        ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 22, top: 20 }}>
      <MaterialCommuntyIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
      borderRadius: 15,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 . min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
