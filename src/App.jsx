import { useState } from "react";

import "./App.css";
import Wishlist from "./components/Wishlist.jsx";
import GunplaForm from "./components/GunplaForm.jsx";

const initialWishlist = [
  {
    id: 1,
    name: "HG Gundam Calibarn",
    img: "src/assets/img/caribarn.jpg",
    price: 700,
  },
  {
    id: 2,
    name: "RG RX-78-2 GUNDAM VER 2.0",
    img: "src/assets/img/rx-78-2v2.jpg",
    price: 1190,
  },
];

function App() {
  const [wishlist, setWishlist] = useState(initialWishlist);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handlerEnterName = (e) => {
    setName(e.target.value);
  };

  const handlerEnterPrice = (e) => {
    setPrice(e.target.value);
  };

  const handlerAddItem = (e) => {
    e.preventDefault();

    if (!name || !price) return;

    const newGunpla = {
      id: wishlist.length + 1,
      name,
      img: "src/assets/img/rx-78-2v2.jpg",
      price,
    };

    setWishlist((prev) => [...prev, newGunpla]);
    setName("");
    setPrice("");
  };

  return (
    <>
      <main>
        <GunplaForm
          name={name}
          price={price}
          onEnterName={handlerEnterName}
          onEnterPrice={handlerEnterPrice}
          onAddItem={handlerAddItem}
        />
        <Wishlist wishlist={wishlist} />
      </main>
    </>
  );
}

export default App;
