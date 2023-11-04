import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Assignment = ({assignment}) => {
    return (
        <div className=" rounded-xl p-0 m-0 justify-between flex flex-col bg-base-100  border-2">
            <figure className="">
                <img src={assignment.thumbnailURL} alt="Assignment" className="rounded-xl w-full h-[200px]" />
            </figure>
            <div className="card-body text-left ">
                <h2 className="card-title text-3xl">{assignment.title}</h2>
                <div>{assignment.description.slice(0, 35)} <button>...see more</button></div>
                <p>{assignment.dueDate}</p>
                <div className="card-actions flex justify-between items-center">
                    <Link className="text-orange-400">Marks:  {assignment.marks}</Link>
                    <Link to={`/checkout/${assignment._id}`} className="text-orange-400 text-3xl btn btn-circle"><FaArrowCircleRight></FaArrowCircleRight></Link>
                </div>
            </div>
        </div>
    );
};

export default Assignment;