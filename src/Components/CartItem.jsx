import { CiTrash } from "react-icons/ci";
import Select from "./Select.jsx";
import { QTY, SIZES } from "../contants.js";
const CartItem = ({ item: { product, qty, size }, onRemoveItem }) => {
  return (
    <div className="cursor-pointer space-y-2 bg-gray-50 p-2 hover:bg-[#DAFFA2]">
      <figure className="flex space-x-2">
        <img className="h-24" src={product.src} />
        <div className="space-y-2">
          <h3 className="font-bold">{product.title}</h3>
          <p className="text-sm text-gray-400">{product.description}</p>
        </div>
        <div className="font-bold">{product.price}$</div>
      </figure>
      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div className="font-bold">
            <span>Size</span>
            <Select
              value={size}
              title=""
              options={SIZES}
              className={"w-16 p-1 pl-2"}
            />
          </div>
          <div className="font-bold">
            <span>Qty</span>
            <Select
              value={qty}
              title=""
              options={QTY}
              className={"w-16 p-1 pl-2"}
            />
          </div>
        </div>
        <button onClick={() => onRemoveItem(product.id)}>
          <CiTrash size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
