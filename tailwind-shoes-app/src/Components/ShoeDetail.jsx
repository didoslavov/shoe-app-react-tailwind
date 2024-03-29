import nike1 from "../assets/n1-min.png";
import { QTY, SIZES } from "../contants.js";
import Select from "./Select.jsx";

const ShoeDetail = () => {
  return (
    <section className="flex flex-col space-x-4 lg:flex-row-reverse">
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center h-full bg-gradient-to-br from-[#f637cf] from-5% via-[#e3d876] via-40% to-[#4dd4c6]">
          <img src={nike1} alt="Image of a shoe" className="animate-float" />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-black md:text-9xl">Nike Air Max 270</h1>
        <p className="font-medium md:text-xl">
          {
            "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient."
          }
        </p>
        <div className="flex space-x-6">
          <div className="text-3xl font-extrabold md:text-6xl">100$</div>
          <Select title={"QTY"} options={QTY} />
          <Select title={"SIZE"} options={SIZES} />
        </div>
        <div className="space-x-10">
          <button className="btn-press-animation h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-8"
          >
            View details
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShoeDetail;
