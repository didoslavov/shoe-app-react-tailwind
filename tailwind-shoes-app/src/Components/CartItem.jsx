import { CiTrash } from "react-icons/ci";
import Select from "./Select.jsx";
import { QTY, SIZES } from "../contants.js";
const CartItem = ({ item }) => {
  return (
    <div className="cursor-pointer space-y-2 bg-gray-50 p-2 hover:bg-[#DAFFA2]">
      <figure className="flex space-x-2">
        <img className="h-24" src={item.src} />
        <div className="space-y-2">
          <h3 className="font-bold">{item.title}</h3>
          <p className="text-sm text-gray-400">{item.description}</p>
        </div>
        <div className="font-bold">{item.price}$</div>
      </figure>
      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div className="font-bold">
            <span>Size</span>
            <Select title="" options={SIZES} />
          </div>
          <div className="font-bold">
            <span>Qty</span>
            <Select title="" options={QTY} />
          </div>
        </div>
        <button>
          <CiTrash size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
