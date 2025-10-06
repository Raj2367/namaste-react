import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { title, itemCards, showItem, setShowIndex } = props;
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="bg-gray-100 p-4 mx-auto my-4 w-6/12 shadow-lg">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {title} ({itemCards?.length})
        </span>
        <span>{showItem ? "▲" : "▼"}</span>
      </div>
      <div>{showItem && <ItemList items={itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
