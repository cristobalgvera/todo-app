interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => (
  <div className="h-screen bg-gray-600 flex items-center justify-center">
    {children}
  </div>
);

export default Layout;
