import { RESTAURANT_LOGO } from "../utils/constants";

const ItemList = (props) => {
  const { items } = props;
  return (
    <div>
      {items.map((item) => {
        const { id, name, price, defaultPrice, description, imageId } =
          item?.card?.info;
        return (
          <div key={id} className="text-left border-b-2 border-gray-300">
            <div className="flex justify-between">
              <div className="w-9/12">
                <div className="py-2">
                  <span className="font-bold">{name}</span>
                  <span> - ₹{(price || defaultPrice) / 100}</span>
                </div>
                <p className="text-xs pb-2">{description}</p>
              </div>
              <div className="w-3/12">
                <img className="w-full h-50 m-4 rounded-xl" src={RESTAURANT_LOGO + imageId} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
