import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MarkAssignment = () => {

    const submitAssignment = useLoaderData();

    console.log(submitAssignment.pdfLink);



    const handleGiveMark =(e)=>{
        e.preventDefault();
        
    }


    return (
        <div className=" p-4  rounded-md">
            <div className='flex justify-start  items-center gap-2'>
                <h1 className="text-2xl font-semibold mb-4"> {submitAssignment.title}</h1>
            </div>
            {/* <a href={submitAssignment.pdfLink}>View It </a> */}
            <div className='flex flex-col lg:flex-row justify-between items-start gap-5'>
                <div className=" rounded-lg shadow-md overflow-hidden flex-1 w-full lg:w-4/5 ">
                    <iframe
                        title="PDF Viewer"
                        className="  overscroll-y-auto h-[70vh] w-full"
                        // src="https://turquoise-bettina-89.tiiny.site"
                        src={submitAssignment.pdfLink}
                    >
                    </iframe>

                </div>
                <div className='w-full lg:w-1/5'>
                    <div>
                        <h1>{submitAssignment.userSubmit}</h1>
                        <h1>Marks:{submitAssignment.marks}</h1>
                    </div>
                    <form onSubmit={handleGiveMark} >
                        <div className='space-y-3'>
                            <label htmlFor='mark'> Give marks:</label>
                            <input type="text" name='mark' id='mark' placeholder='give Mark' className='border-2 p-2  w-full rounded-xl' />
                            <input type="submit" value="Submit" className='btn btn-sm btn-warning w-full' />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default MarkAssignment;