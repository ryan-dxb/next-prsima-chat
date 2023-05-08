import { FC, ReactNode } from "react";
import Sidebar from "../components/siderbar/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
};

export default Layout;
