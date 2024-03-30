import { useState } from "react";
import Nav from "./Components/Nav.jsx";
import NewArrivalsSection from "./Components/NewArrivalsSection.jsx";
import ShoeDetail from "./Components/ShoeDetail.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import { SHOE_LIST } from "./contants.js";
import CartItem from "./Components/CartItem.jsx";

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
        <h2 className="mb-10 text-2xl font-bold">Cart</h2>
        <CartItem item={SHOE_LIST[0]} />
        <CartItem item={SHOE_LIST[1]} />
        <CartItem item={SHOE_LIST[2]} />
      </Sidebar>
    </div>
  );
}

export default App;
