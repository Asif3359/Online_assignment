import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { CiMenuKebab } from "react-icons/ci";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Assignment = ({ assignment ,handleDelete }) => {

    return (
        <div className=" rounded-xl p-0 m-0 justify-between flex flex-col   border-2">
            <figure className="relative">
                <img src={assignment.thumbnailURL} alt="Assignment" className="rounded-xl w-full h-[200px]" />
                <div className='absolute right-0 -top-0'>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-sm btn-warning btn-circle"><CiMenuKebab></CiMenuKebab></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-lg  w-40 space-y-1 ">
                            <li><Link to={`/update/${assignment._id}`} className="  btn btn-sm">update</Link></li>
                            <li><button onClick={()=>handleDelete(assignment._id,assignment.email )}   className="  btn btn-sm">Delete</button></li>
                        </ul>
                    </div>
                </div>
            </figure>
            <div className=" py-5 px-3 text-left space-y-2  ">
                <h2 className="card-title text-3xl">{assignment.title}</h2>
                <div>{assignment.description.slice(0, 35)} <button>...see more</button></div>
                <p>{assignment.dueDate}</p>
                <div className="card-actions flex justify-between items-center">
                    <Link className="text-orange-400">Marks:  {assignment.marks}</Link>
                    <Link to={`/view/${assignment._id}`} className="  btn btn-sm btn-warning">View</Link>
                </div>
            </div>
        </div>
    );
};

export default Assignment;