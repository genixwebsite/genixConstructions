import React from 'react';

const Second = () => {

  return (
    <div className="flex h-screen">
      <div className='flex flex-row h-screen w-screen'>
        <div className='bg-white h-screen w-2/5 justify-items-center content-center'>
          <div className='text-6xl italic font-bold text-blue-500  p-16 text-center'>Our Mission</div>
          <div className='text-xl max-w-4xl text-justify p-16'>Our Mission is to understand our client needs to deliver high-quality buildings on time and on budget. We will be recognised for being
                                            innovative and collaborative, developing our team, having longterm relationships with our clients.</div>
        </div>
        <div className='bg-blue-500 h-screen w-3/5'>
        <div className='text-6xl italic font-bold text-white p-16 text-center'>Our Vision</div>
          <div className='text-lg max-w-4xl text-justify p-14'>Our expertise in estimating, construction, project management and pre- construction services ensures that our customers receive a
            quality product at a fair price and in a reasonable time frame. This is accomplished through the selective use of responsible subcontractors,
            hiring and retaining first class employees, and working for clients that share a belief in open, honest, and direct communication.
            Regardless of whether you are an owner, architect, designer, engineer, tenant, broker, subcontractor, or supplier, you are a
            respected member of our team and will be treated as such. This commitment to team and to open project leadership yields not only
            successful construction projects, but more importantly, satisfied customers. The end result of this style of relationship building is
            100% referable customers. We’re committed to your success. Contact us today and let us know
            how we can help your next project succeed.</div>
        </div>
      </div>
    </div>
  );
};

export default Second;
