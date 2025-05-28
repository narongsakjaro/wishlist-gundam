import React from "react";

const Card = ({ children }) => {
  return (
    <div className="hover:border-gray-200 border-2 border-gray-400 w-auto rounded-2xl bg-black h-[auto] gap-4 m-2 overflow-hidden shadow-lg hover:shadow-gray-600/30">
      {children}
    </div>
  );
};

export default Card;
