export const cartReducer = (state = { cartItems: [] }, action) => {
  console.log("add to cart")
  
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("cartItems : ",...state.cartItems)
      console.log("action payload", action.payload )
      const alreadyExists = state.cartItems.find(
        (item) => item.name === action.payload.name
      ); 
      console.log("exist : ",alreadyExists)
      if (alreadyExists) {
        console.log("exist =======================");
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.name === action.payload.name ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case "DELETE_FROM_CART":
      console.log("---------delete -------")
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.name !== action.payload.name
        ),
      };
    default:
      return state;
  }
};
