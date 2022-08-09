import Axios from "axios";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/home/BottomTabs";

const YELP_API_KEY =
  "tVhxe8d38RWT3fnt7zdRoCrCUnRqMehiAf5KOE5q4VVzCw7nthacAxuv1ma16DrnNpW-__ansi223Azf17MFIdTHhrHbINKSEhhfuCeDtftz77DMst2o5IDb-jPvYnYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [citys, setCity] = useState("Holliwood");
  const [activeTab, setActiveTab] = useState("Delivery");

  // console.log('----------------------------------- \n',restaurantData);

  const getRestaurantsFromYelp = () => {
    // const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${citys}`;
    const yelpUrl = "https://api.yelp.com/v3/businesses/search";

    // const apiOptions = {
    //   headers: {
    //     Authorization: `Bearer ${YELP_API_KEY}`,
    //   },
    // };
    //  fetch(yelpUrl, apiOptions)

    Axios({
      method: "get",
      url: yelpUrl,
      params: {
        term: "restaurants",
        // businesses: "businesses",
        location: citys,
      },
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    })
      // .then((res) => res.json())
      .then((json) => {
        // console.log("--------------Request-------------\n", json);
        setRestaurantData(
          json.businesses.filter((businesses) =>
            businesses.transactions.includes(activeTab.toLowerCase())
          )
        );
      })
      .catch((e) => console.log("error requete: ", e));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [citys, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandlers={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={0.5} />
      <BottomTabs />
    </SafeAreaView>
  );
}
