import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Assignment from './Assignment';

const Assignments = () => {
    const assignments = useLoaderData();
    return (
        <div className=' mx-auto p-4'>
            <div className='mb-5 relative'>
                <img src="https://img.freepik.com/free-vector/tasks-schedule-concept-with-people-making-notes_107791-15370.jpg?w=1380&t=st=1699126173~exp=1699126773~hmac=29b4d682336180b1fd125099f01a52888659860c28b40e58c0efd2dadb3b9c6b" alt="" className='w-full h-44 rounded-lg' />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start p-2">
                    <p className="text-white text-2xl">All Assignment</p>
                </div>
            </div>
            <div>{assignments.length}</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    assignments.map((assignment, index) => <Assignment key={index} assignment={assignment}></Assignment>)
                }
            </div>
        </div>
    );
};

export default Assignments;