import { useReducer, useState, createContext } from "react";
import cartReducer from "../reducers/cartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const [items, dispatch] = useReducer(cartReducer, []);

  const openCart = () => {
    setCartOpen(!cartOpen);
  };

  const addToCart = (product, count) => {
    const index = items.findIndex((item) => item.product === product);

    setTotal(total + count);

    if (index === -1) {
      dispatch({ type: "ADD", item: { product, count } });
    } else {
      console.log(items[index])
      items[index].count += count;
    }
  };

  const deleteToCart = (index) => {
    setTotal(total - items[index].count);
    dispatch({ type: "REMOVE", index });
  };

  return (
    <CartContext.Provider
      value={{ cartOpen, items, total, openCart, addToCart, deleteToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
