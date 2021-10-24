interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => (
  <div className="h-screen flex flex-col items-center justify-center gap-y-3">
    {children}
  </div>
);

export default AppLayout;
