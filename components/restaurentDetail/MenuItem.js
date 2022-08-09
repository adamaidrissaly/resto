import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";

const foods = [
  {
    title: "Brochette de Poulets",
    description: "Brochette de Poulets Mariner avec du Vin Blanc",
    price: "$200",
    image:
      "https://img.freepik.com/photos-gratuite/moitie-inferieure-affiche-delicieuses-brochettes-poulet-planche-bois-autres-aliments-table_140725-147650.jpg?size=626&ext=jpg&ga=GA1.2.662389067.1659298157",
  },
  {
    title: "Salade au Ton",
    description: "Salade au Ton Hacher et des Oeufs dure",
    price: "$45",
    image:
      "https://img.freepik.com/photos-gratuite/salade-copieuse-saine-thon-haricots-verts-tomates-oeufs-pommes-terre-olives-noires-close-up-dans-bol-table_2829-4485.jpg?size=626&ext=jpg&ga=GA1.2.662389067.1659298157",
  },
  {
    title: "Aille de Poules Braiser",
    description: "Aille de Poulet Braiser avec des Oeufs comme accompagnements",
    price: "$95.99",
    image:
      "https://img.freepik.com/photos-gratuite/ailes-poulet-barbecue-dans-sauce-aigre-douce-pique-nique-menu-ete-nourriture-savoureuse-vue-dessus-mise-plat_2829-6471.jpg?size=626&ext=jpg&ga=GA1.2.662389067.1659298157",
  },
  {
    title: "Patte Penne",
    description: "Patte Penne au sauce Tomate",
    price: "$30. 39",
    image:
      "https://img.freepik.com/photos-gratuite/pates-penne-sauce-tomate-au-poulet-tomates-table-bois_2829-19739.jpg?size=626&ext=jpg&ga=GA1.2.662389067.1659298157",
  },
  {
    title: "Brochette de Poulets au Tomate",
    description: "Brochette de Poulets avec des tranches de tomate",
    price: "$50",
    image:
      "https://img.freepik.com/photos-gratuite/brochettes-poulet-tranches-poivrons-doux-aneth_2829-18813.jpg?size=626&ext=jpg&ga=GA1.2.662389067.1659298157",
  },
  {
    title: "Steak de poitine de poulets",
    description: "Steak de poitine de poulets grille au legumes",
    price: "$150",
    image:
      "https://img.freepik.com/photos-premium/steak-poitrine-poulet-grille-aux-legumes_1339-74206.jpg?size=626&ext=jpg&ga=GA1.2.662389067.1659298157",
  },
  {
    title: "Steak de Boeuf grille",
    description: "Steak de Boeuf grille",
    price: "$90",
    image:
      "https://img.freepik.com/photos-gratuite/steak-boeuf-grille-surface-bois-sombre_1150-44344.jpg?size=626&ext=jpg&ga=GA1.2.662389067.1659298157",
  },
  {
    title: "Steak de Boeuf",
    description: "Steak de Boeuf grille",
    price: "$90",
    image:
      "https://img.freepik.com/photos-gratuite/steak-boeuf-grille-surface-bois-sombre_1150-44344.jpg?size=626&ext=jpg&ga=GA1.2.662389067.1659298157",
  },
  {
    title: "Brochette de Poulets",
    description: "Brochette de Poulets Mariner avec du Vin Blanc",
    price: "$200",
    image:
      "https://img.freepik.com/photos-gratuite/moitie-inferieure-affiche-delicieuses-brochettes-poulet-planche-bois-autres-aliments-table_140725-147650.jpg?size=626&ext=jpg&ga=GA1.2.662389067.1659298157",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 25,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default function MenuItem({ restaurantName }) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
      // restaurantName : item,
    });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((foods, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "blue", borderRadius: 1 }}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(foods, checkboxValue)}
            />
            <FoodInfo foods={foods} />
            <FoodImage foods={foods} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}> {props.foods.title} </Text>
    <Text> {props.foods.description} </Text>
    <Text> {props.foods.price} </Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.foods.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
