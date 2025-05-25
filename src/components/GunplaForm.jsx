import React from "react";
import Container from "./Container";

const GunplaForm = ({
  onEnterName,
  onEnterPrice,
  onAddItem,
  onInsertImage,
  onExportData,
  onEnterRef,
  name,
  price,
  ref,
}) => {
  return (
    <>
      <Container>
        <div className="form">
          <input
            className="input-text"
            type="text"
            placeholder="NAME"
            value={name}
            onChange={onEnterName}
            required
          />
          <input
            className="input-text"
            type="text"
            placeholder="PRICE"
            value={price}
            onChange={onEnterPrice}
            required
          />
          <input
            className="input-text"
            type="text"
            placeholder="URL"
            value={ref}
            onChange={onEnterRef}
          />
          <input
            className="input-text"
            type="file"
            id="img-input"
            onChange={onInsertImage}
          />
          <button className="btn" onClick={onAddItem}>
            ADD
          </button>
          <button className="btn btn-white" onClick={onExportData}>
            EXPORT
          </button>
        </div>
      </Container>
    </>
  );
};

export default GunplaForm;
