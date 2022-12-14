let defaultState = {
  selectedItems: { items: [], restaurantName: "" },
};

let CartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      if (action.payload.checkboxValue) {
        console.log("Add To Cart");
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        console.log("Remouve From Cart ");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title != action.payload.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }

      // console.log(newState, " 👉 ");
      return newState;
    }
    default:
      return state;
  }
};

export default CartReducer;
