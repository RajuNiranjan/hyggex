import React from "react";
import logo from "../assets/navlogo.png";
import Button from "../ui/button";

const navData = [
  {
    id: "1",
    name: "home",
  },
  {
    id: "2",
    name: "flashcard",
  },
  {
    id: "3",
    name: "contact",
  },
  {
    id: "4",
    name: "FAQ",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-3 px-10">
      <div className="w-[150px]">
        <img src={logo} alt="logo image" className="cursor-pointer" />
      </div>
      <dlv className="flex gap-[40px] justify-center items-center">
        <ul className="flex gap-[40px] text-[#3a3740] capitalize font-[400px] cursor-pointer">
          {navData?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <div>
          <Button name="login" />
        </div>
      </dlv>
    </div>
  );
};

export default Navbar;
