import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import Categories from "../Category";
import Card from "../Components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../Components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
// import { useSelector } from "react-redux";
// import { input } from "postcss";

const Home = () => {
  // let [cate,setCate] = useState(food_items);
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let new_list = food_items.filter(
        (item) => item.food_category === category,
      );
      setCate(new_list);
    }
  }

  let items = useSelector((state) => state.cart);

  let subtotle = items.reduce(
    (totle, item) => totle + item.qty * item.price,
    0,
  );
  let delivery_fee = 20;
  let taxes = (subtotle * 0.5) / 100;
  let totle = Math.floor(subtotle + delivery_fee + taxes);

  return (
    <div>
      <Navbar />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-7">
          {Categories.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-2 h-[130px] w-[120px] bg-white rounded-lg font-semibold shadow-md hover:bg-green-200 cursor-pointer transtion-all duration-500"
                onClick={() => filter(item.name)}
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="flex flex-wrap justify-center">
        {cate.length > 1 ? (
          cate.map((item) => {
            return (
              <Card
                key={item.id}
                name={item.food_name}
                image={item.food_image}
                id={item.id}
                price={item.price}
                type={item.food_type}
              />
            );
          })
        ) : (
          <div className="text-center text-gray-500 font-semibold text-lg">
            No items found.....
          </div>
        )}
      </div>

      <div
        className={`w-[40vw] h-[100%] overflow-y-auto p-5 fixed top-0 right-0 bg-white shadow-xl transition-all duration-500 ${showCart ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="flex justify-between items-center">
          <span className="text-[20px] text-green-500 font-semibold">
            Order Item
          </span>
          <RxCross2
            className="text-[24px] text-green-500 font-semibold cursor-pointer hover:text-gray-500"
            onClick={() => {
              setShowCart(false);
            }}
          />
        </header>

        {items.length > 0 ? (
          <>
            <div>
              {items.map((item) => (
                <Card2
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>

            <div className="w-full border-t-2 border-b-2 border-gray-600 mt-5 flex flex-col gap-3 px-5 py-3">
              <div className="w-full flex justify-between items-center">
                <span className="text-xl text-gray-600 font-semibold">
                  Subtotle
                </span>
                <span className="text-lg text-green-600 font-semibold">
                  Rs {subtotle}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-xl text-gray-600 font-semibold">
                  Delivery Fees
                </span>
                <span className="text-lg text-green-600 font-semibold">
                  Rs {delivery_fee}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-xl text-gray-600 font-semibold">
                  Taxes
                </span>
                <span className="text-lg text-green-600 font-semibold">
                  Rs {taxes}/-
                </span>
              </div>
            </div>
            <div className=" px-5 py-3 w-full flex justify-between items-center">
              <span className="text-xl text-gray-600 font-semibold">Totle</span>
              <span className="text-lg text-green-600 font-semibold">
                Rs {totle}/-
              </span>
            </div>
            <button
              className="w-full bg-green-500 text-white text-xl py-3 font-semibold rounded-lg cursor-pointer hover:bg-green-600 transition-all duration-400"
              onClick={() => {
                toast.success("Your order has been placed successfully!");
              }}
            >
              Place Order
            </button>
          </>
        ) : (
          <div className="text-center text-gray-500 font-semibold text-lg">
            Empty Cart.....
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
