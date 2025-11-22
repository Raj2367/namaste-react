import { Link } from "react-router";

const OrderSuccess = () => {
  return (
    <div className="my-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
          className="w-20 h-20 mx-auto mb-4"
          alt="success"
        />

        <h1 className="text-2xl font-bold mb-2">Order Placed!</h1>

        <p className="text-gray-600 mb-6">
          Thanks for buying! Your order is confirmed and on its way 🎉
        </p>

        <div className="space-y-3">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
            View Order
          </button>

          <Link to="/">
            <button className="w-full border border-gray-400 py-2 rounded-lg cursor-pointer">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
