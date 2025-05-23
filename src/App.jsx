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
  const [image, setImage] = useState("");

  const handlerEnterName = (e) => {
    setName(e.target.value);
  };

  const handlerEnterPrice = (e) => {
    setPrice(e.target.value);
  };

  const handlerAddItem = async (e) => {
    e.preventDefault();

    if (!name || !price) return;

    // base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
    let base64String = "";
    if (image) {
      base64String = await getBase64(image);
    }

    const newGunpla = {
      id: wishlist.length + 1,
      name,
      img: base64String,
      price,
    };

    setWishlist((prev) => [...prev, newGunpla]);
    setName("");
    setPrice("");
    setImage("");
  };

  const handlerInsertImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handlerExportData = () => {
    const json = JSON.stringify(wishlist);
    console.log(json);
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  return (
    <>
      <main>
        <GunplaForm
          name={name}
          price={price}
          onEnterName={handlerEnterName}
          onEnterPrice={handlerEnterPrice}
          onInsertImage={handlerInsertImage}
          onAddItem={handlerAddItem}
          onExportData={handlerExportData}
        />
        <Wishlist wishlist={wishlist} />
      </main>
    </>
  );
}

export default App;
