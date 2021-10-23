interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => (
  <div className="h-screen flex flex-col items-center justify-center gap-y-3">
    {children}
  </div>
);

export default Layout;
