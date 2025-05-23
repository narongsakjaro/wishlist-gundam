import List from "../components/List.jsx";
import Container from "./Container.jsx";
const Wishlist = ({ wishlist }) => {
  return (
    <>
      <section className="whishlist">
        <Container>
          <List wishlist={wishlist} />
        </Container>
      </section>
    </>
  );
};

export default Wishlist;
