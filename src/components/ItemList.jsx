import React from "react";

const ItemList = ({ img, name, price }) => {
  return (
    <>
      <div className="card">
        <img src={img} />
        <div className="card-content">
          <div className="card-detail">
            <h4>{name}</h4>
            <p>Price : {price} $</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
