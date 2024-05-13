import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import { useEffect, useState } from "react";
import Nav from "./Components/Nav.jsx";
import NewArrivalsSection from "./Components/NewArrivalsSection.jsx";
import ShoeDetail from "./Components/ShoeDetail.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import { SHOE_LIST } from "./contants.js";
import Cart from "./Components/Cart.jsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");

    if (isDarkMode) {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");

    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark"),
    );
  };

  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updatedCartItems = [...cartItems];
      const existingItem = cartItems.findIndex(
        (i) => i.product.id === product.id,
      );

      if (existingItem !== -1) {
        updatedCartItems[existingItem].qty = qty;
        updatedCartItems[existingItem].size = size;
      } else {
        updatedCartItems.push({ product, qty, size });
      }

      setCartItems(updatedCartItems);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = [...cartItems];
    const existingItem = cartItems.findIndex((i) => i.product.id === productId);

    updatedCartItems.splice(existingItem, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="animate-fadeIn dark:bg-night p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
      <NewArrivalsSection items={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={cartItems} onRemoveItem={removeFromCart} />
      </Sidebar>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="bg-night-50 dark:text-night rounded-full px-4 py-2 text-white shadow-lg dark:bg-white"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}

export default App;
