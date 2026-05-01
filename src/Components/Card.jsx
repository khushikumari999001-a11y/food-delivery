import React from 'react';
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../Redux/CartSlice';
import { toast } from 'react-toastify';

const Card = ({name,image,id,price,type}) => {

  let dispatch = useDispatch()

  return (
    <div className="flex shadow-lg flex-col flex-wrap gap-3 rounded-lg mx-5 my-10 w-[300px] p-2 bg-white hover:border-4 border-green-200 transition-all duration-300 " >
      <div>
        <img src={image} alt="..." className='h-[230px] w-[100%] overflow-hidden rounded-lg' />
      </div>
      <p className='text-2xl font-semibold'>{name}</p>
      <div className='flex justify-between items-center'>
        <p className='text-lg text-green-500 font-bold'>Rs {price}/-</p>
        <div className='flex items-center gap-3 text-green-500 text-lg font-semibold'>
          
          {type === "veg" ? <LuLeafyGreen/> : <GiChickenOven/>}
          <span>{type}</span>
        </div>
      </div>
    <button className='bg-green-500 text-white py-2  rounded-lg hover:bg-green-700 cursor-pointer transition-all duration-500' onClick={() => 
    {dispatch(AddItem({id:id, name:name, price:price, image:image, qty:1}))
    toast.success("Added to dish")
  }
  }>Add to Dish</button>
    </div>
  )
}

export default Card;