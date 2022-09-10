import { useEffect, useState } from "react";
import { response } from "../../data/response"; 
import { getElementById } from "../../selectors/getElementById";


export const useProducts = () => {


    const data = [...response];
    const [cart, setCart] = useState(data);
    const [billing, setBilling] = useState({});
  
    useEffect(() => {
      if (cart.length) {
        calculate();
      };
      if (!cart.length) {
        setBilling({
          subtotal: 0,
          shipping: 0,
          taxes: 0,
          total: 0
        })
  
      }
  
    }, [cart])
  
    const handleAddProduct = (id) => {
      const findItem = cart.filter(item => item.id === id);
      const idProduct = getElementById(id);
  
      if (findItem[0].quantity === response[idProduct].price) return;
  
      const oldCart = [...cart];
      const newCart = oldCart.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            quantity: e.quantity + 1
          }
        } else {
          return e;
        }
      })
      setCart(newCart);
    }
  
    const handleSubstractProduct = (id) => {
      const findItem = cart.filter(item => item.id === id);
  
      if (findItem[0].quantity === 1) return;
  
      const oldCart = [...cart];
      const newCart = oldCart.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            quantity: e.quantity - 1
          }
        } else {
          return e;
        }
      })
  
      setCart(newCart);
    }
  
    const handleDeleteProduct = (id) => {
  
      const oldCart = [...cart];
      const newCart = oldCart.filter((e) => e.id !== id);
      setCart(newCart);
    }
  
    const handleRemoveAll = () => {
      setCart([]);
    }
  
    const calculate = () => {
      let subtotal = 0;
      let shipping = 0;
      let taxes = 0;
      let total = 0;
  
      cart.map(item => {
        const indexProduct = getElementById(item.id);
        const product = response[indexProduct];
        subtotal = subtotal + item.quantity * product.priceWT;
        taxes = taxes + item.quantity * product.tax;
        shipping = shipping + item.quantity * product.shippingFee;
        return product;
      });
      total = subtotal + shipping + taxes;
  
      const bill = {
        subtotal,
        shipping,
        taxes,
        total
      }
      setBilling(bill);
    }
    return {
      handleAddProduct,
      handleSubstractProduct,
      handleDeleteProduct,
      handleRemoveAll,
      billing,
      cart
    }
}