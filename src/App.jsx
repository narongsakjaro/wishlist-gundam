import { useState, useReducer } from "react";

// import "./App.css";
import Wishlist from "./components/Wishlist.jsx";
import InputForm from "./components/InputForm.jsx";
import Container from "./components/Container.jsx";
import Modal from "./components/Modal.jsx";

import { db } from "./db/db.js";
import { useLiveQuery } from "dexie-react-hooks";

const initObject = {
  name: "",
  price: "",
  image: "",
  ref: "",
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
      return { ...formState, ref: action.payload };
    case "resetForm":
      return { ...initObject };
    default:
      return formState;
  }
}

function App() {
  const [formState, dispatch] = useReducer(reducer, initObject);
  const [status, setStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const wishlist = useLiveQuery(() => db.wishlist.toArray());

  const handlerAddGunpla = async (e) => {
    e.preventDefault();

    if (!formState.name || !formState.price)
      return console.log("Please fill the form");

    let base64String = "";
    if (formState.image) {
      base64String = await getBase64(formState.image);
    }

    try {
      await db.wishlist.add({
        name: formState.name,
        price: formState.price,
        image: base64String,
        ref: formState.ref,
      });
      dispatch({ type: "resetForm" });
    } catch (err) {
      setStatus(`Failed to add: ${err}`);
      console.log(status);
    }
  };

  const handlerExportData = () => {
    const json = JSON.stringify(wishlist ?? []);
    console.log(json);
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handlerCloseModal = () => {
    setIsModalOpen(true);
    dispatch({ type: "resetForm" });
  };

  return (
    <>
      <main className="mt-5">
        <Container>
          <div className="flex items-center mb-5">
            <input
              className="flex-4/5 outline-0"
              type="text"
              placeholder="SEARCH"
            />
            <button className="flex-1/5" onClick={handlerCloseModal}>
              ADD
            </button>
          </div>
          <Wishlist wishlist={wishlist ?? []} />
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onClost
          >
            <InputForm
              name={formState.name}
              price={formState.price}
              ref={formState.ref}
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
              onAddItem={handlerAddGunpla}
              onExportData={handlerExportData}
            />
          </Modal>
        </Container>
      </main>
    </>
  );
}

export default App;
