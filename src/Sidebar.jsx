import React, { useState } from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <div className="sidebar">
      <div className="flex justify-between ">
        <div className="flex items-center">
          <MdOutlineDesignServices />
          Design Team
        </div>
        
        <div >x+1</div>
      </div>
      <div className="flex justify-between ">
        <div className="flex items-center">
        <RiTeamLine />
          Marketing Team
        </div>
        <div >x+2</div>
      </div>
      <div className="flex justify-between ">
        <div className="flex items-center">
            <div className="flex items-center">
            <FaChevronLeft/>
            <FaChevronRight />
            </div>
        
          Development Team
        </div>
        <div >x+3</div>
      </div>
      <div className="flex justify-between ">
        <div className="flex items-center">
        <IoMdAddCircleOutline />
         Create form
        </div>
       <hr/>
      </div>
      <ul className="list-group">
        <li className="list-group-item cursor-pointer" onClick={handleClick1}>
          Dropdown 1<span className="float-end">{open1 ? "-" : "+"}</span>
          {open1 && (
            <ul className="list-group">
              <li className="list-group-item">Option 1</li>
              <li className="list-group-item">Option 2</li>
              <li className="list-group-item">Option 3</li>
            </ul>
          )}
        </li>
        <li className="list-group-item" onClick={handleClick2}>
          Dropdown 2<span className="float-end">{open2 ? "-" : "+"}</span>
          {open2 && (
            <ul className="list-group">
              <li className="list-group-item">Option 4</li>
              <li className="list-group-item">Option 5</li>
              <li className="list-group-item">Option 6</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
