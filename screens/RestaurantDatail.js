import { View, Text } from "react-native";
import About from "../components/restaurentDetail/About";
import { Divider } from "react-native-elements/dist/divider/Divider";
import MenuItem from "../components/restaurentDetail/MenuItem";
import ViewCart from "../components/restaurentDetail/ViewCart";



export default function RestaurantDatail({route, navigation}) {
  return (
    <View style={{flex: 1}}>
      <About route={route && route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem />
      <ViewCart navigation={navigation} restaurantName={ route && route.params.name} /> 
    </View>
  );
}
