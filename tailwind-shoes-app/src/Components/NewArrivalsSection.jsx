import Card from "./Card.jsx";

function NewArrivalsSection({ items }) {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <h2 className=" bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold dark:text-white">
          NEW ARRIVALS
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-1 justify-between gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
        {items.map((i) => (
          <Card key={i.id} item={i} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivalsSection;
