import ItemList from "./ItemList.jsx";

const List = ({ wishlist }) => {
  return (
    <>
      <div className="grid grid-cols-5 max-2xl:grid-cols-5 max-xl:grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
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
