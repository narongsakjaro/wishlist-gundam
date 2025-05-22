import ItemList from "./ItemList.jsx";

const List = () => {
  const wishlist = [
    {
      id: 1,
      name: "HG Gundam Calibarn",
      img: "src/assets/img/caribarn.jpg",
      price: 700,
    },
    {
      id: 2,
      name: "RG RX-78-2 GUNDAM VER 2.0",
      img: "src/assets/img/rx-78-2v2.jpg",
      price: 1190,
    },
  ];
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
