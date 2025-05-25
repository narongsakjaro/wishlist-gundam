import ItemList from "./ItemList.jsx";

const List = ({ wishlist }) => {
  return (
    <>
      <div className="item-list">
        {wishlist.map((item) => (
          <ItemList
            key={item.id}
            name={item.name}
            img={item.image}
            price={item.price}
            ref={item.ref}
          />
        ))}
      </div>
    </>
  );
};

export default List;
