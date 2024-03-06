import React, { useState } from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegFolder } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import img from '../Data/Images/innovation.png'
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const handleClick5 = () => {
    setOpen5(!open5);
  };

  return (
    <div className="  SideBar" >
         
         <div className="flex justify-between mb-2">
         <div className="flex items-center">
          <div>
            <img src={img} alt="" style={{ width: '45px', height: '50px' , borderRadius:'15px',cursor:'pointer'}} />
          </div>
          <div className="flex flex-col ml-2">
            <p className="m-0">INC</p>
            <p className="m-0">Innovative Hub</p>
          </div>
        </div>
        
        <div className="mt-2">
          <img
            src="https://img.freepik.com/premium-photo/fire-alphabet-letter-isolated-black-background_564276-8929.jpg"
            alt=""
            style={{ width: '25px', height: '25px' , cursor:'pointer'}}
            className="rounded-full"
          />
        </div>

      </div>
      <div className="flex justify-between mb-2">
        <div className="flex items-center cursor-pointer">
          <MdOutlineDesignServices />
          Design Team
        </div>
        
        <div className="text-gray-500" >x+1</div>
      </div>
      <div className="flex justify-between mb-2">
        <div className="flex items-center cursor-pointer">
        <RiTeamLine />
          Marketing Team
        </div>
        <div className="text-gray-500" >x+2</div>
      </div>
      <div className="flex justify-between mb-1">
        <div className="flex items-center cursor-pointer">
            <div className="flex items-center">
            <FaChevronLeft/>
            <FaChevronRight />
            </div>
        
          Development Team
        </div>
        <div className="text-gray-500" >x+3</div>
      </div>
      <div className="flex justify-between ">
        <div className="flex items-center gap-1 text-gray-500">
        <IoMdAddCircleOutline />
         Create a form
        </div>
       <hr/>
      </div>
      <div className="flex justify-between text-gray-500 ">
        <div >
       FOLDER
        </div>
      <div>+</div>
      </div>
      
      <ul className="list-group">
        <li className="list-group-item" onClick={handleClick1}>
          <div className="flex justify-between">
          <div className="flex items-center">
          <FaRegFolder style={{ marginRight: '0.5rem' }}/>Products
          </div>
        <span className="float-end cursor-pointer">{open1 ? "-" : "+"}</span>

          </div>
          {open1 && (
            <ul className="list-group">
              <li className="list-group-item">Roadmap</li>
              <li className="list-group-item">Feedback</li>
              <li className="list-group-item">Performance</li>
              <li className="list-group-item">Team</li>
              <li className="list-group-item">Analytics</li>
              <li className="list-group-item">
                <div className="flex items-center">
                <IoMdAddCircleOutline /> Add new sub
                  </div>
                  </li>
            </ul>
          )}
        </li>
        <li className="list-group-item" onClick={handleClick2}>
        <div className="flex justify-between">
          <div className="flex items-center">
          <FaRegFolder style={{ marginRight: '0.5rem' }}/>Sales
          </div>
        <span className="float-end cursor-pointer">{open2 ? "-" : "+"}</span>

          </div>
          {open2 && (
            <ul className="list-group">
              <li className="list-group-item">Option 4</li>
              <li className="list-group-item">Option 5</li>
              <li className="list-group-item">Option 6</li>
            </ul>
          )}
        </li>
        <li className="list-group-item" onClick={handleClick3}>
        <div className="flex justify-between">
          <div className="flex items-center">
          <FaRegFolder style={{ marginRight: '0.5rem' }}/>Design
          </div>
        <span className="float-end cursor-pointer">{open3 ? "-" : "+"}</span>

          </div>
          {open3 && (
            <ul className="list-group">
              <li className="list-group-item">Option 4</li>
              <li className="list-group-item">Option 5</li>
              <li className="list-group-item">Option 6</li>
            </ul>
          )}
        </li>
        <li className="list-group-item cursor-pointer" onClick={handleClick4}>
        <div className="flex justify-between">
          <div className="flex items-center">
          <FaRegFolder style={{ marginRight: '0.5rem' }}/>Office
          </div>
        <span className="float-end cursor-pointer">{open4 ? "-" : "+"}</span>

          </div>
          {open4 && (
            <ul className="list-group">
              <li className="list-group-item">Option 4</li>
              <li className="list-group-item">Option 5</li>
              <li className="list-group-item">Option 6</li>
            </ul>
          )}
        </li>
        <li className="list-group-item cursor-pointer" onClick={handleClick5}>
        <div className="flex justify-between">
          <div className="flex items-center">
          <FaRegFolder style={{ marginRight: '0.5rem' }}/>Legal
          </div>
        <span className="float-end cursor-pointer">{open5 ? "-" : "+"}</span>

          </div>
          {open5 && (
            <ul className="list-group">
              <li className="list-group-item">Option 4</li>
              <li className="list-group-item">Option 5</li>
              <li className="list-group-item">Option 6</li>
            </ul>
          )}
        </li>
      </ul>
    
          <div className=" absolute bottom-0 left-0 ">
      <div className="flex items-center mb-2 cursor-pointer">
        <IoPersonAdd style={{ marginRight: '0.5rem' }} /> Invite teammates
      </div>
      <div className="flex items-center mb-2 cursor-pointer">
        <MdHelpOutline style={{ marginRight: '0.5rem' }}/> Help and First Steps
      </div>
      <div className="flex justify-between mb-2 cursor-pointer">
        <div className="mr-6">Days left on trial</div>
        <button className="sideBarBtn">Add Billing</button>
      </div>
    </div>


    </div>
  );
};

export default Sidebar;
