import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from '../components/ui/Navbar';
import { Cart } from '../pages/Cart';
import { Detail } from '../pages/Detail';
import { Order } from '../pages/Order';
import { Products } from '../pages/Products';

export const Router = () => {
    return (
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<Detail />}/>
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </BrowserRouter>
    );
  }
  