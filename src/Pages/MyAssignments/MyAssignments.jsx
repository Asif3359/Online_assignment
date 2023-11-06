import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyAssignment from './MyAssignment';
import axios from 'axios';
import { useEffect } from 'react';

const MyAssignments = () => {

    const [myAssignments, setMyAssignment] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/assignment', { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setMyAssignment(res.data);
            });

    }, []);
    // console.log(myAssignments);

    return (
        <div className=' mx-auto p-4'>
            <div className='mb-5 relative'>
                <img src="https://img.freepik.com/free-vector/tasks-schedule-concept-with-people-making-notes_107791-15370.jpg?w=1380&t=st=1699126173~exp=1699126773~hmac=29b4d682336180b1fd125099f01a52888659860c28b40e58c0efd2dadb3b9c6b" alt="" className='w-full h-44 rounded-lg' />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start p-2">
                    <p className="text-white text-2xl">My Assignment</p>
                </div>
            </div>
            <div>{myAssignments?.length}</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    myAssignments.map((myAssignment, index) => <MyAssignment key={index} myAssignment={myAssignment}></MyAssignment>)
                }
            </div>
        </div>
    );
};

export default MyAssignments;