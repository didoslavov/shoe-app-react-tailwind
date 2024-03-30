const Card = ({ item, onClickCard }) => {
  return (
    <figure
      onClick={() => onClickCard(item)}
      className={`${item.className}  max-w-xl transform cursor-pointer transition hover:scale-105`}
    >
      <div className="p-8">
        <h2 className="">{item.title}</h2>
        <a href="#" className="font-semibold underline underline-offset-4">
          SHOP NOW +
        </a>
      </div>
      <img src={item.src} className="absolute left-[40%] top-0   h-40 w-56" />
    </figure>
  );
};

export default Card;
