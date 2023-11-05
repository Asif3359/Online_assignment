import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TakeAssignment = () => {
    const assignment = useLoaderData();
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
                        <form>
                            <div className="mb-4">
                                <label htmlFor="pdfLink" className="block text-sm font-medium ">
                                    PDF Link:
                                </label>
                                <input
                                    type="text"
                                    id="pdfLink"
                                    className="w-full border rounded-lg py-2 px-3 mt-2 focus:outline-none focus:ring focus:border-blue-300"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="notes" className="block text-sm font-medium ">
                                    Notes:
                                </label>
                                <textarea
                                    id="notes"
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