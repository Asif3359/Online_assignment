import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SubmitAssign from './SubmitAssign';
import { AuthContext } from '../../Providers/AuthProviders';

const SubmittedAssignment = () => {
    const {user}=useContext(AuthContext);
    const [submitAssignments, setSubmitAssignments] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/submitAssignment`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const PendingAssignment = data.filter((assignment) => assignment.pending === true);
                const PendingAssignmentForUser = PendingAssignment.filter((assignment)=>assignment.email===user.email);
                setSubmitAssignments(PendingAssignmentForUser);
            })
    }, [])
    return (
        <div className='p-4'>
            <div>
                <div className='mb-5 relative rounded-lg'>
                    <img src="https://img.freepik.com/free-vector/tasks-schedule-concept-with-people-making-notes_107791-15370.jpg?w=1380&t=st=1699126173~exp=1699126773~hmac=29b4d682336180b1fd125099f01a52888659860c28b40e58c0efd2dadb3b9c6b" alt="" className='w-full h-44 rounded-lg' />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start p-2">
                        <p className="text-white text-2xl"> All Submitted Assignment</p>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Examinee Name</th>
                            <th>Assignment Marks</th>
                            <th>Pending Status</th>
                            <th>Give Mark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submitAssignments.map(submitAssignment => <SubmitAssign key={submitAssignment._id} submitAssignment={submitAssignment}></SubmitAssign>)
                        }
                    </tbody>
                </table >
            </div>
        </div>
    );
};
export default SubmittedAssignment;

