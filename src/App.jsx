import { useState, useReducer } from "react";

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

const initObject = {
  name: "",
  price: "",
  image: "",
  ref_link: "",
};

function reducer(formState, action) {
  switch (action.type) {
    case "setName":
      return { ...formState, name: action.payload };
    case "setPrice":
      return { ...formState, price: action.payload };
    case "setImage":
      return { ...formState, image: action.payload };
    case "setRefLink":
      return { ...formState, ref_link: action.payload };
    default:
      return formState;
  }
}

function App() {
  const [wishlist, setWishlist] = useState(initialWishlist);
  const [formState, dispatch] = useReducer(reducer, initObject);

  const handlerAddItem = async (e) => {
    e.preventDefault();

    if (!formState.name || !formState.price)
      return console.log("Please fill the form");

    // base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
    let base64String = "";
    if (formState.image) {
      base64String = await getBase64(formState.image);
    }

    const newGunpla = {
      id: wishlist.length + 1,
      name: formState.name,
      price: formState.price,
      img: base64String,
    };

    setWishlist((prev) => [...prev, newGunpla]);
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
          name={formState.name}
          price={formState.price}
          onEnterName={(e) => {
            dispatch({ type: "setName", payload: e.target.value });
          }}
          onEnterPrice={(e) =>
            dispatch({ type: "setPrice", payload: e.target.value })
          }
          onInsertImage={(e) =>
            dispatch({ type: "setImage", payload: e.target.files[0] })
          }
          onEnterRef={(e) =>
            dispatch({ type: "setRefLink", payload: e.target.value })
          }
          onAddItem={handlerAddItem}
          onExportData={handlerExportData}
        />
        <Wishlist wishlist={wishlist} />
      </main>
    </>
  );
}

export default App;
