import React from "react";

const ItemList = ({ img, name, price }) => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <img src={img} alt={img} />
          <div className="img-detail">
            <h4>{name}</h4>
            <p>Price : {price} $</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
