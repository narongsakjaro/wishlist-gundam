import React from "react";

const ItemList = ({ img, name, price, ref }) => {
  return (
    <>
      <div className="card">
        <img src={img} alt={name} />
        <div className="card-content">
          <div className="card-detail">
            <h4>
              {ref === null ? (
                name
              ) : (
                <a href={ref} target="_blank">
                  {name}
                </a>
              )}
            </h4>
            <p>Price : {price} $</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
