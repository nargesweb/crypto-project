import React from 'react';

import load from "../gif/Spinner-0.8s-201px.gif"

const Loading = () => {
     return (
          <div>
               <img src={load} alt="load" />
               <h1>Loading</h1>
          </div>
     );
};

export default Loading;