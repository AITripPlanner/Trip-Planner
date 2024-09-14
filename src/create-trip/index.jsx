import React from 'react';
import Header from '@/components/custom/Header';

function CreateTrip() {
  return (
    <>
      <Header/>
      <div className="pt-16 min-h-screen sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
        <h2 className="text-3xl font-bold">Tell us your travell preferences</h2>
        <p className='mt-3 text-gray-500 text-xl'>Just provide some bassic information, and our trip planner will generate a customized itinrary based on your preferences</p>
        <div>
          <div className='mt-10'>
            <h2 text-xl my-3 font-medium>What id your destination of choice?</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTrip;
