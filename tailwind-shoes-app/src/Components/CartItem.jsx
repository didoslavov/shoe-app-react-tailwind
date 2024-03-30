const CartItem = ({ item }) => {
  return (
    <figure
      className="
      flex 
      cursor-pointer
    space-x-2
      bg-gray-50
    p-2
    hover:bg-[#DAFFA2]
      "
    >
      <img className="h-24" src={item.src} />
      <div className="space-y-2">
        <h3 className="font-bold">{item.title}</h3>
        <p className="text-sm text-gray-400">{item.description}</p>
      </div>
      <div className="font-bold">{item.price}$</div>
    </figure>
  );
};

export default CartItem;
