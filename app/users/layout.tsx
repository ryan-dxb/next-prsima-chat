import { FC, ReactNode } from "react";
import Sidebar from "../components/siderbar/Sidebar";
import getUsers from "../actions/getUsers";
import UserList from "../components/UserList";

interface LayoutProps {
  children: ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
  const users = await getUsers();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <UserList users={users} />
        {children}
      </div>
    </Sidebar>
  );
};

export default Layout;
