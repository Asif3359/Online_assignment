import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateAssignments = () => {
    const [assignment, setAssignment] = useState({
        title: '',
        description: '',
        marks: 0,
        thumbnailUrl: '',
        difficulty: 'easy',
        dueDate: new Date(),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAssignment({ ...assignment, [name]: value });
    };

    const handleDateChange = (date) => {
        setAssignment({ ...assignment, dueDate: date });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(assignment); // You can handle form submission logic here
    };

    return (
        <div className=" mx-auto p-4">
            <div className='mb-5 relative'>
                <img src="https://img.freepik.com/free-vector/tasks-schedule-concept-with-people-making-notes_107791-15370.jpg?w=1380&t=st=1699126173~exp=1699126773~hmac=29b4d682336180b1fd125099f01a52888659860c28b40e58c0efd2dadb3b9c6b" alt="" className='w-full h-44 rounded-lg' />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start p-2">
                    <p className="text-white text-2xl">Create Your Updated Assignment</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-2 '>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-left">Title</label>
                        <input type="text" id="title" placeholder='Title ' name="title" value={assignment.title} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="marks" className="block text-left">Marks</label>
                        <input type="number" id="marks" name="marks" value={assignment.marks} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="thumbnailUrl" className="block text-left">Thumbnail Image URL</label>
                        <input type="text" id="thumbnailUrl" placeholder='url:' name="thumbnailUrl" value={assignment.thumbnailUrl} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-left">Difficulty Level</label>
                        <select name="difficulty" value={assignment.difficulty} onChange={handleChange} className="w-full px-4 py-2 border rounded">
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-left">Due Date</label>
                        <input type='date' selected={assignment.dueDate} onChange={handleDateChange} className="w-full px-4 py-2 border rounded" />
                    </div>
                    <div className="mb-4 row-span-2">
                        <label htmlFor="description" className="block text-left">Description</label>
                        <textarea id="description" name="description" placeholder='Short Description' rows="5" value={assignment.description} onChange={handleChange} className="w-full px-4 py-2 border h-fit rounded"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default CreateAssignments;