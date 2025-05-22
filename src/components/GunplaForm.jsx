import React from "react";
import Container from "./Container";

const GunplaForm = ({ onEnterName, onEnterPrice, onAddItem, name, price }) => {
  return (
    <>
      <Container>
        <form>
          <div className="form">
            <input
              type="text"
              id="name"
              placeholder="NAME"
              value={name}
              onChange={onEnterName}
              required
            />
            <input
              type="text"
              id="price"
              placeholder="PRICE"
              value={price}
              onChange={onEnterPrice}
              required
            />
            <button onClick={onAddItem}>ADD</button>
            <button>REMOVE</button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default GunplaForm;
