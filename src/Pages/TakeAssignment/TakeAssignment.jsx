import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import axios from 'axios';

const TakeAssignment = () => {
    const assignment = useLoaderData();
    const {user}= useContext(AuthContext)
    const navigate=useNavigate();
    const {title, marks, thumbnailURL, difficulty, dueDate, description, email}=assignment;
    const submitEmail = user.email;
    const userSubmit = user.displayName;
    const pending = true;
    const examineeMarks="";
    const handleSubmitAssignment = (e)=>{

        e.preventDefault();
        const from = e.target;
        const pdfLink = from.pdfLink.value; 
        const notes = from.notes.value; 

        const submitUser = {
            pdfLink,notes,
            title, marks,examineeMarks, thumbnailURL, difficulty, dueDate, description, email,submitEmail,userSubmit,pending,
        }

        console.log(submitUser);
        axios.post("http://localhost:5000/submitAssignment", submitUser)
            .then((response) => {
                // Handle the successful response here
                console.log('POST request successful', response.data);
                from.reset();
                navigate("/assignments");
            })
            .catch((error) => {
                // Handle any errors that occurred during the POST request
                console.error('Error making POST request', error);
            });

    }


    return (
        <div className='p-4 space-y-3'>
            <div>
                <h1 className='text-3xl font-bold'>{assignment.title}</h1>
                <p>Marks: {assignment.marks}</p>
                <p>Submission Date: {assignment.dueDate}</p>
            </div>
            <div className=" flex flex-col lg:flex-row justify-between items-center gap-4 ">
                <div className='flex-1'>
                    <img src={assignment.thumbnailURL} alt="" className='rounded-xl' />
                </div>
                <div className='flex-1'>
                    <div className=" mx-auto p-6 rounded-lg ">
                        <h2 className="text-2xl font-semibold mb-4">Assignment Submission Form</h2>
                        <form onSubmit={handleSubmitAssignment}>
                            <div className="mb-4">
                                <label htmlFor="pdfLink" className="block text-sm font-medium ">
                                    PDF Link:
                                </label>
                                <input
                                    type="text"
                                    id="pdfLink"
                                    name="pdfLink"
                                    className="w-full border rounded-lg py-2 px-3 mt-2 focus:outline-none focus:ring focus:border-blue-300"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="notes" className="block text-sm font-medium ">
                                    Notes:
                                </label>
                                <textarea
                                    id="notes"
                                    name='notes'
                                    className="w-full border rounded-lg py-2 px-3 mt-2 focus:outline-none focus:ring focus:border-blue-300"
                                    rows="4"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white font-semibold rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Submit Assignment
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default TakeAssignment;
// onChange={(e) => setPdfLink(e.target.value)}
// onChange={(e) => setNotes(e.target.value)}
// onSubmit = { handleSubmit }