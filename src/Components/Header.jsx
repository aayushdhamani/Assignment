import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { TbMedicalCross } from "react-icons/tb";
import { FaCaretDown } from "react-icons/fa";
import { AiOutlineSortDescending } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { TiFolderAdd } from "react-icons/ti";
import { TfiImport } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const Header = ({ setSearch }) => {
  return (
    <div className="mb-2">
      <div className="flex justify-between mb-2">
        <p className="font-semibold text-2xl">Products</p>
        <div className="flex gap-1">
          <div className="search-bar mt-2">
            <button type="submit" className="search-button">
              <IoMdSearch />
            </button>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <div className="Box">
            <Link to='/setting' style={{ color: 'black' }}>
              <IoSettingsOutline />
            </Link>
          </div>
          <div className="Box">
            <IoCopyOutline />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <div className="Box">
            <TbMedicalCross /> All Brands <FaCaretDown />
          </div>
          <div className="Box">
            Desk <FaCaretDown />
          </div>
          <div className="Box">
            Tags <FaCaretDown />
          </div>
          <div className="Box text-gray-500">
            <AiOutlineSortDescending /> Sort
          </div>
          <div className="Box text-gray-500">
            <FaFilter style={{ width: '12px', height: '12px' }} /> Filter
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="Box">
            <TiFolderAdd /> Meetings
          </div>
          <div className="Box">
            <TfiImport /> Imports/Exports
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
