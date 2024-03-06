import React from 'react'
import { GrCheckboxSelected } from "react-icons/gr";
import { IoArchiveOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md"
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const Bottom = () => {
  return (
    <div className='flex justify-center gap-1 mt-[75px]'>
        <div className='Box'>

      <GrCheckboxSelected /> Selected
        </div>
        <div className='Box'>

      <IoArchiveOutline /> Archive
        </div>
        <div className='Box'>

      <MdDeleteForever /> Delete
        </div>
        <div className='Box'>
       More <FaCaretDown />

        </div>
        <div className='Box'>
        <MdOutlineCancel />
        </div>
    </div>
  )
}

export default Bottom
