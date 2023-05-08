import { NextPage } from "next";
import EmptyState from "../components/EmptyState";

interface UsersProps {}

const Users: NextPage<UsersProps> = () => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
  );
};

export default Users;
