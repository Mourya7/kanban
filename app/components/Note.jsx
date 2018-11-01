import React from 'react';
import '../main.css';

export default ({children, ...props}) => (
  <div {...props}>
    {children}
  </div>
);
