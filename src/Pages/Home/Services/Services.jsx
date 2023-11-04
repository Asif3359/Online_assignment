import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import useServices from '../../../Hooks/useServices';

const Services = () => {
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:5000/services")
    //         .then(res => res.json())
    //         .then(data => {
    //             setServices(data);
    //         })
    // })
    const features= useServices();
    return (
        <div className='flex flex-col items-center justify-center mt-5'>
            <div className='text-center space-y-1 mt-5 lg:mt-15'>
                <h3 className='text-3xl text-orange-400'>Feature section</h3>
                <h1 className='text-5xl'>Our Feature Area</h1>
                <p className='w-full lg:w-3/4 mx-auto pt-4'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>
                {
                    features.map((feature,index) => <div key={index} className=" rounded-xl p-0 m-0 justify-between flex flex-col bg-base-100  border-2">
                        <figure className="">
                            <img src={feature.thumbnailURL} alt="Assignment" className="rounded-xl w-full h-[200px]" />
                        </figure>
                        <div className="card-body text-left ">
                            <h2 className="card-title text-3xl">{feature.title}</h2>
                            <div>{feature.description.slice(0,35)} <button>...see more</button></div>
                            <p>{feature.dueDate}</p>
                            <div className="card-actions flex justify-between items-center">
                                <Link  className="text-orange-400">Marks:  {feature.marks}</Link>
                                <Link to={`/checkout/${feature._id}`}  className="text-orange-400 text-3xl btn btn-circle"><FaArrowCircleRight></FaArrowCircleRight></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <button className='btn btn-outline btn-warning mt-7'>More Services</button>
            </div>
        </div>
    );
};

export default Services;