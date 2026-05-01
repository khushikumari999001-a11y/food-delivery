import React, { useContext, useEffect } from 'react';
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from 'react-icons/fi';
import  { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

function Navbar() {

  let {input,setInput,cate,setCate,showCart,setShowCart} = useContext(dataContext);
  useEffect(() => {
    let newlist = food_items.filter((item) => item.food_name.includes(input)||item.food_name.toLowerCase().includes(input)||item.food_name.toUpperCase().includes(input));
    setCate(newlist);
  },[input])
    let items = useSelector(state => state.cart);
    console.log(items);
  
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5'>
        <div className='w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-md'>
          <MdFastfood className='w-[30px] h-[30px] text-green-500' />
        </div>

        <form className='flex relative' onSubmit={(e) => e.preventDefault()} >
          <FaSearch className='absolute left-3.5 bottom-5 h-[20px] w-[20px] text-green-500' />
          <input type="text" placeholder="Search for food..." className='bg-white w-[800px] h-[60px] border-0 px-11 rounded-md shadow-md text-lg text-gray-800'
          onChange={(e)=>setInput(e.target.value)} value={input} />
        </form>

        <div className='relative w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-md cursor-pointer' onClick={() => {
          setShowCart(true)
        }}>
          <span className='absolute top-0 right-2 text-green-500 font-semibold text-[18px]'>{items.length}</span>
          <FiShoppingBag className='w-[30px] h-[30px] text-green-500' />
        </div>
    </div>
  )
}

export default Navbar;
