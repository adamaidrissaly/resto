import { View, Text, Image } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAX24mAArguksZBK9UANFHOjk-At_I98a6Yw&usqp=CAU",
  price: "$$",
  reviews: "1500",
  rating: 4.5,
  categories: [
    { title: "Indian" },
    { title: "Comfort Food" },
    { title: "Coffee" },
    { title: "Ice Cream" },
    { title: "Snacks" },
  ],
};

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat).join(" . ");

  const description = `${formattedCategories} ${
    price ? " . " + price : ""
  } . 🎫 . ${rating} . 🌟 . (${reviews} +)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitile name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitile = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginHorizontal: 15,
    }}
  >
    {props.name}{" "}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {" "}
    {props.description}{" "}
  </Text>
);
