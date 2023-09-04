import React from "react";
import Button from "./Button";

const ButtonList = () => {
    let val = -1;
    const list = ["All", "Gaming", "Songs", "Live", "Cricket", "Soccer", "News", "Valentines", "Cooking", "Live", "Cricket", "Soccer", "News", "Valentines", "Cooking"]
  return <div className="flex">
    {list.map((item) => {val++; return <Button key={val} name={item}/>})}
  </div>;
};

export default ButtonList;
