import axios from "axios";
import swal from "sweetalert";
var http=require('http')
var url=require('url')
var qs=require('querystring')
var MongoClient=require('mongodb').MongoClient


export const getAllFood= () => async (dispatch) => {
  dispatch({ type: "GET_FOOD_REQUEST" });
  try {

    console.log("Try");
    const response = await axios.get("/api/food/getAllFood");
    console.log("response : ",response.data);
    dispatch({ type: "GET_FOOD_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_FOOD_FAIL", payload: err });
  }
}; 

export const addFood = (food) => async (dispatch) => {
  dispatch({ type: "ADD_FOOD_REQUEST" });
  try {
    await axios.post("/api/food/addfood", { food });
    dispatch({ type: "ADD_FOOD_SUCCESS" });
  } catch (err) {
    dispatch({ type: "ADD_FOOD_FAIL", payload: err });
  }
};

export const getFoodById = (foodId) => async (dispatch) => {
  dispatch({ type: "GET_FOODBYID_REQUEST" });
  try {
    const response = await axios.post("/api/food/getfoodbyid", { foodId });
    dispatch({ type: "GET_FOODBYID_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_FOODBYID_FAIL", payload: err });
  }
};

export const updateFood = (updatedFood) => async (dispatch) => {
  dispatch({ type: "UPDATE_FOODBYID_REQUEST" });
  try {
    const response = await axios.post("/api/food/updatefood", {
      updatedFood,
    });
    dispatch({ type: "UPDATE_FOODBYID_SUCCESS", payload: response.data });
    window.location.href = "/admin/pizzalist";
  } catch (err) {
    dispatch({ type: "UPDATE_FOODBYID_FAIL", payload: err });
  }
};

export const deleteFood = (foodId) => async (dispatch) => {
  try {
    await axios.post("/api/food/deletefood", { foodId });
    swal("Food Deleted Succss!", "success");
    window.location.href = "/admin/pizzalist";
    // console.log(res);
  } catch (error) {
    swal("Errro While Deleteing Food-item");
  }
};

export const filterFood = (searchkey, category) => async (dispatch) => {
  let filterdFood;
  dispatch({ type: "GET_FOOD_REQUEST" });
  try {
    const res = await axios.get("/api/food/getAllFood");
    console.log("res ",res);
    filterdFood = res.data.filter((food) =>
      food.name.toLowerCase().includes(searchkey)
    );
    console.log("search : ",filterFood);
    if (category !== "all") {
      filterdFood = res.data.filter(
        (food) => food.category.toLowerCase() === category
      );
    }
    dispatch({ type: "GET_FOOD_SUCCESS", payload: filterdFood });
  } catch (error) {
    dispatch({ type: "GET_FOOD_FAIL", payload: error });
  }
};
