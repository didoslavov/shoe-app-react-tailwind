import { useState } from "react";
import Nav from "./Components/Nav.jsx";
import NewArrivalsSection from "./Components/NewArrivalsSection.jsx";
import ShoeDetail from "./Components/ShoeDetail.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import { SHOE_LIST } from "./contants.js";
import Cart from "./Components/Cart.jsx";

const FAKE_CART_ITEMS = SHOE_LIST.map((s) => ({
  product: s,
  qty: 1,
  size: 44,
}));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={FAKE_CART_ITEMS} />
      </Sidebar>
    </div>
  );
}

export default App;
