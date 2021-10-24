interface ScrollableProps {
  children: React.ReactNode;
}

const Scrollable = ({ children }: ScrollableProps) => {
  return <div className="overflow-y-scroll h-60">{children}</div>;
};

export default Scrollable;
