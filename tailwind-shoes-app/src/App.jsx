import Nav from "./Components/Nav.jsx";
import NewArrivalsSection from "./Components/NewArrivalsSection.jsx";
import ShoeDetail from "./Components/ShoeDetail.jsx";
import { SHOE_LIST } from "./contants.js";

function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
    </div>
  );
}

export default App;
