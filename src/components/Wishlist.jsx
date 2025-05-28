import List from "../components/List.jsx";
const Wishlist = ({ wishlist }) => {
  return (
    <>
      <section className="whishlist">
        <List wishlist={wishlist} />
      </section>
    </>
  );
};

export default Wishlist;
