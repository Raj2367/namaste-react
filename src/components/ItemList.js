import { useDispatch } from "react-redux";
import { RESTAURANT_LOGO } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
  const { items } = props;
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => {
        const { id, name, price, defaultPrice, description, imageId } =
          item?.card?.info;
        return (
          <div
            key={id}
            className="p-4 text-left border-b-2 border-gray-300 flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-bold">{name}</span>
                <span> - ₹{(price || defaultPrice) / 100}</span>
              </div>
              <p className="text-xs pb-2">{description}</p>
            </div>
            <div className="relative w-3/12 my-4">
              <img
                className="w-full h-50 rounded-xl"
                src={RESTAURANT_LOGO + imageId}
              />
              <button
                className="absolute bottom-0 left-0 right-0 bg-black/60 text-white py-2 text-center rounded-b-xl cursor-pointer"
                onClick={() => handleAddItem(item?.card?.info)}
              >
                ADD +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
