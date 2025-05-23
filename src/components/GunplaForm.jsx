import React from "react";
import Container from "./Container";

const GunplaForm = ({
  onEnterName,
  onEnterPrice,
  onAddItem,
  onInsertImage,
  onExportData,
  name,
  price,
}) => {
  return (
    <>
      <Container>
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
          <input type="file" id="img-input" onChange={onInsertImage} />
          <button onClick={onAddItem}>ADD</button>
          <button onClick={onExportData}>EXPORT</button>
        </div>
      </Container>
    </>
  );
};

export default GunplaForm;
