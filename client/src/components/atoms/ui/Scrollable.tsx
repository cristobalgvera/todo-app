import React from 'react';

interface ScrollableProps {
  children: React.ReactNode;
}

const Scrollable = ({ children }: ScrollableProps) => (
  <div className="overflow-y-scroll px-6 h-60 flex flex-col">{children}</div>
);

export default Scrollable;
