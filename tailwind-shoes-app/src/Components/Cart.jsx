import CartItem from "./CartItem.jsx";

const Cart = ({ cartItems }) => {
  return (
    <>
      <h2 className="mb-5 text-4xl font-bold">Cart</h2>
      <ul className="space-y-5">
        {cartItems.map((i) => (
          <li key={i.product.id}>
            <CartItem item={i} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
