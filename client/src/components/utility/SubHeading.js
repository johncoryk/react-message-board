import React from 'react';

const SubHeading = ({ text, color }) => (
  <h2 className='sub-heading' style={{ color: `${color}` }}>
    {text}
  </h2>
);

export default SubHeading;
