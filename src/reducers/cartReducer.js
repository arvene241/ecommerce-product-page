import React from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { product: action.item, count: action.count }];
    case "REMOVE":
      const newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
    default:
      return state;
  }
};

export default cartReducer;
