import { FC, ReactNode } from "react";
import Sidebar from "../components/siderbar/Sidebar";
import ConversationList from "../components/ConversationList";
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";

interface LayoutProps {
  children: ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList
          users={users}
          title="Messages"
          initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  );
};

export default Layout;
