import React from 'react';
import {Puff} from 'react-loader-spinner';

export const Loading = () => (
  <div className="flex justify-center items-center ">
    <Puff color="#00BFFF" height={550} width={80} />
  </div>
);
