import React from 'react';

const CalendarIcon = (props: any) => {
  return (
    <svg width={20} height={20} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17 2a1 1 0 011 1v1h1a3 3 0 013 3v12a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h1V3a1 1 0 012 0v1h8V3a1 1 0 011-1zM4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7H4zm0-2h16V7a1 1 0 00-1-1h-1v1a1 1 0 11-2 0V6H8v1a1 1 0 01-2 0V6H5a1 1 0 00-1 1v3z'
        fill='#FFC860'
        opacity={0.8}
      />
    </svg>
  );
};

export default CalendarIcon;
