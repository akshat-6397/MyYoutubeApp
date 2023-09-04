import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {

    const dispatch = useDispatch();

    const toogleMenuHandler = () => {
        dispatch(toggleMenu());
    };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
        <div className="flex col-span-1 items-center">
            <img
                onClick={() => toogleMenuHandler()}
                className="h-8 cursor-pointer"
                src="https://cdn3.iconfinder.com/data/icons/navigation-67/32/Burger_hamburger_menu-512.png"
                alt="menu"
            />
            <img 
                className="h-8 mx-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png?20220605194644"
                alt="logo"
            />
      </div>
      <div className="col-span-10 px-10 flex justify-center items-center">
        <input className="w-2/3 focus:outline outline-blue-400 pl-5 border border-gray-400 p-2 rounded-l-full" type="text" placeholder="Search" />
        <button className="border border-gray-400 bg-gray-200 p-2 rounded-r-full w-16 flex justify-center items-center"><img className="h-6 w-6 mix-blend-darken" alt="search" src="https://clipground.com/images/search-vector-clipart-1.jpg"/></button>
      </div>
      <div className="col-span-1 flex items-center">
        <img 
            className="h-8"
            src="https://cdn.onlinewebfonts.com/svg/img_383210.png"
            alt="userIcon"
        />
      </div>
    </div>
  );
};

export default Head;
