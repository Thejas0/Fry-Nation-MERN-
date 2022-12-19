export const getAllFoodReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case "GET_FOOD_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_FOOD_SUCCESS":
      return {
        pizzas: action.payload,
        loading: false,
      };
    case "GET_FOOD_FAIL":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export const addFoodReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_FOOD_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_FOOD_SUCCESS":
      return {
        success: true,
        loading: false,
      };
    case "ADD_FOOD_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const getFoodByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_FOODBYID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_FOODBYID_SUCCESS":
      return {
        pizza: action.payload,
        loading: false,
      };
    case "GET_FOODBYID_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const updateFoodByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_FOODBYID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "UPDATE_FOODBYID_SUCCESS":
      return {
        updatesuccess: true,
        updateloading: false,
      };
    case "UPDATE_FOODBYID_FAIL":
      return {
        updateloading: false,
        updateerror: action.payload,
      };
    default:
      return state;
  }
};
