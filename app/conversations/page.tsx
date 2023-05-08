"use client";

import clsx from "clsx";
import { NextPage } from "next";
import EmptyState from "../components/EmptyState";
import useConversation from "../hooks/useConversation";

interface ConversationsProps {}

const Conversations: NextPage<ConversationsProps> = () => {
  const { isOpen } = useConversation();
  return (
    <div
      className={clsx("lg:pl-80 h-full lg:block", isOpen ? "block" : "hidden")}
    >
      <EmptyState />
    </div>
  );
};

export default Conversations;
