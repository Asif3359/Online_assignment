import React from 'react';
import banner1 from "../../../assets/images/banner/1.jpg"
const Baner = () => {
    return (
        <div>
            <div className="carousel w-full  ">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero bg-opacity-75  bg-cover bg-no-repeat bg-center bg-gradient-to-r rounded-lg" style={{ backgroundImage: `url(${banner1})` }}>
                        <div className="hero-overlay bg-gradient-to-r from-[#2e2e2e] rounded-lg  "></div>
                        <div className=" text-neutral-content py-20 my-20 lg:my-40 mt-10">
                            <div className="p-3">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi illo, culpa asperiores quo dignissimos a.</p>
                                <div className='flex gap-1 items-center'>
                                    <button className="btn btn-warning">Warning</button>
                                    <button className="btn btn-outline">Primary</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Baner;

// bg-opacity-70
// bg-opacity-70
// bg-opacity-70
// bg-opacity-70