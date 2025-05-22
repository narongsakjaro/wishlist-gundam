import List from "../components/List.jsx";
import Container from "./Container.jsx";
const Wishlist = ({ wishlist }) => {
  return (
    <>
      <section class="whishlist">
        <Container>
          <List wishlist={wishlist} />
        </Container>
      </section>
    </>
  );
};

export default Wishlist;
