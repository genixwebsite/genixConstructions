import React from 'react';

const Third = () => {

    return (
        <div className="flex h-screen">
            <div className='flex flex-row h-screen w-screen'>
                <div className='bg-blue-500 h-screen w-2/5 justify-items-center content-center'>
                    <div className='text-6xl font-bold text-white p-16 text-center'>WHAT WE DO</div>
                </div>
                <div className='bg-white h-screen w-3/5 flex flex-col'>
                    <div className='text-md text-justify p-4 max-w-max mt-6'>
                        With every project, GENIX implements a series of procedures that provides critical guidelines by which each component of the project may
                        be carefully and precisely monitored. GENIX actively participates with our clients and their design team during each stage of the project to
                        ensure a project that produces the best value within the budget.
                    </div>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center p-8'>
                        <div className='h-64 w-full bg-[url("/image1.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'>
                            <div className='absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center'>
                                <div className='text-4xl font-semibold text-white text-center group-hover:hidden'>PreConstruction</div>
                                <div className='flex flex-col text-xl text-white font-semibold mt-4 text-center opacity-0 group-hover:opacity-100'>
                                    <div>Value Engineering</div>
                                    <div>Site Assessment</div>
                                    <div>Material</div>
                                </div>
                            </div>
                        </div>
                        <div className='h-64 w-5/5 bg-[url("/image2.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'>
                            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
                                <div className='text-4xl font-semibold text-white text-center group-hover:hidden'>Construction</div>
                                <div className='flex flex-col text-xl text-white font-semibold mt-4 text-center opacity-0 group-hover:opacity-100'>
                                    <div>Quality Control</div>
                                    <div>Project Management</div>
                                    <div>Timely Completion</div>
                                    <div>Cost reduction</div>
                                </div>
                            </div>
                        </div>
                        <div className='h-64 w-5/5 bg-[url("/image3.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'>
                            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
                                <div className='text-4xl font-semibold text-white text-center group-hover:hidden'>Commission</div>
                                <div className='flex flex-col text-xl text-white font-semibold mt-4 text-center opacity-0 group-hover:opacity-100'>
                                    <div>Punch list</div>
                                    <div>Correction of points</div>
                                    <div>As built documents</div>
                                </div>
                            </div>
                        </div>
                        <div className='h-64 w-5/5 bg-[url("/image4.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'>
                            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
                                <div className='text-4xl font-semibold text-white text-center group-hover:hidden'>PostConstruction</div>
                                <div className='flex flex-col text-xl text-white font-semibold mt-4 text-center opacity-0 group-hover:opacity-100'>
                                    <div>Rectification of issues</div>
                                    <div>Service during DLP</div>
                                    <div>Ongoing assistance for as long as needed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Third;
