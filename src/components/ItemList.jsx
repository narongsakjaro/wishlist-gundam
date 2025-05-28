import React from "react";
import Card from "./Card";
import CardContent from "./CardContent";

const ItemList = ({ img, name, price, ref }) => {
  return (
    <>
      <Card>
        <img className="p-2 rounded-2xl" src={img} alt={name} />
        <CardContent>
          <div className="card-detail">
            <h4 className="text-gray-200 line-clamp-2 text-balance leading-4.5 font-mono font-bold">
              {ref === null ? (
                name
              ) : (
                <a href={ref} target="_blank">
                  {name}
                </a>
              )}
            </h4>
            <p className="text-gray-400 font-mono">Price : {price} $</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ItemList;
