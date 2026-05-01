import React from "react";
// import image1 from "../assets/image1.avif"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { DecrementQty, IncrementQty, RemoveItem } from "../Redux/cartslice";

const Card2 = ({name, price, image, id , qty}) => {
  let dispatch = useDispatch();
  return (
    <div className="w-full h-[160px] flex justify-between p-2 shadow-lg rounded-lg">
      <div className="w-[60%] h-full  flex gap-5 justify-center items-center">
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img src={image} alt="" className="object-cover h-full w-full" />
        </div>
        <div className="w-[40%] h-full flex gap-5 flex-col">
          <div className="text-lg text-gray-600 font-semibold">{name}</div>
          <div className="w-[110px] h-[40px]  flex justify-center items-center font-semibold border-2 border-green-500 rounded-lg overflow-hidden shadow-md">
            <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-500" onClick={() => {
              qty > 1 ?  dispatch(DecrementQty(id)) : 1;
            }}>-</button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center border-x-2 border-green-500 items-center text-green-500">{qty}</span>
            <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-500" onClick={() => {
              dispatch(IncrementQty(id))
            }}>+</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-5">
        <span className="text-xl text-green-500 font-semibold">Rs {price}/-</span>
        <RiDeleteBin6Line className="w-[30px] h-[25px] text-red-600 cursor-pointer" onClick={() => dispatch(RemoveItem(id))} />
      </div>
    </div>
  );
};

export default Card2;
