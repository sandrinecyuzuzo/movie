import React, { useState } from 'react';

const NoPage = () => {
    return (
      <div className="flex flex-col text-center py-32 h-screen">
        <span className="text-primary text-4xl font-bold text-blue-500"></span>
        <span className="text-8xl text-white font-black py-2">
          Page not found
        </span>
        <span className="text-lg text-bodyText">
          Sorry! We couldn&apos;t find the page you&apos;re looking for.
        </span>
      </div>
    );
  };
  
  export default NoPage;