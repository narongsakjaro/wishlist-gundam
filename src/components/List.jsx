import ItemList from "./ItemList.jsx";

const List = ({ wishlist }) => {
  return (
    <>
      <div class="item-list">
        {wishlist.map((item) => (
          <ItemList
            key={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default List;
