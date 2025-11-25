import { useDispatch, useSelector } from "react-redux";
import { RESTAURANT_LOGO } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router";

const normalizeCart = (items) => {
  const map = items.reduce((acc, item) => {
    const id = item.id;
    // ensure defaultPrice exists
    const defaultPrice = item.defaultPrice ?? item.price ?? 0;

    if (!acc[id]) {
      acc[id] = {
        id,
        name: item.name,
        category: item.category,
        description: item.description,
        imageId: item.imageId,
        price: item.price ?? 0,
        defaultPrice,
        qty: 1,
      };
    } else {
      // If same id occurs again, increment qty and (optionally) keep first seen fields
      acc[id].qty += 1;
      // If you want to prefer latest price, you could set acc[id].price = item.price
    }
    return acc;
  }, {});
  // produce array with subtotal per item
  const normalized = Object.values(map).map((it) => ({
    ...it,
    subtotal: it.qty * (it.price ?? it.defaultPrice ?? 0),
  }));
  return normalized;
};

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const normalizedItems = normalizeCart(cartItems);
  // calculate total cart price
  const cartTotal = normalizedItems.reduce(
    (s, it) => s + (it.subtotal ?? 0),
    0
  );
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center">
      <h1 className="mt-4 p-4 text-3xl font-bold">Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Your cart is empty. Please go to the{" "}
          <Link to="/" className="font-bold text-blue-500">
            shopping page
          </Link>
        </div>
      ) : (
        <div>
          <div className="m-auto w-6/12 text-right">
            <button
              className="m-2 p-2 rounded-lg bg-red-500 text-white cursor-pointer"
              onClick={handleClearCart}
            >
              Clear cart
            </button>
          </div>
          <div className="m-auto p-4 w-6/12 flex justify-between bg-gray-100 rounded-t-xl">
            <div className="w-3/12 font-bold">Item</div>
            <div className="w-3/12 font-bold">Name</div>
            <div className="w-3/12 font-bold">Quantity</div>
            <div className="w-3/12 font-bold">SubTotal</div>
          </div>
          <div>
            {normalizedItems.map((item, index) => {
              const { id, name, imageId, qty, subtotal } = item;
              return (
                <div
                  key={id}
                  className="m-auto p-4 w-6/12 flex items-center justify-between bg-gray-100 rounded-b-xl"
                >
                  <div className="w-3/12">
                    <img
                      src={RESTAURANT_LOGO + imageId}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="w-3/12">{name}</div>
                  <div className="w-3/12">{qty}</div>
                  <div className="w-3/12">₹{subtotal / 100}</div>
                </div>
              );
            })}
          </div>
          <div className="m-auto w-6/12">
            <div className="my-4 p-4 flex justify-between bg-gray-200 rounded-xl">
              <div className="w-9/12 font-bold">Total</div>
              <div className="w-3/12">₹{cartTotal / 100}</div>
            </div>
          </div>
          <div className="m-auto w-6/12">
            <Link to="/order/success">
              <button
                className="mb-4 p-4 w-full bg-green-500 font-bold text-white rounded-xl cursor-pointer"
                onClick={handleClearCart}
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
