import { IoIosArrowDown } from "react-icons/io";

const Select = ({ title, options, className, value, onChange }) => {
  return (
    <div className="relative dark:text-black">
      <select
        onChange={(e) => onChange(e.target.value)}
        value={value || ""}
        className={`appearance-none border border-gray-300 bg-white ${className}`}
      >
        <option disabled hidden value="">
          {title}
        </option>
        {options.map((o) => (
          <option value={o} key={o}>
            {o}
          </option>
        ))}
      </select>
      <div className="flex-center pointer-events-none absolute inset-y-0 right-0 pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Select;
