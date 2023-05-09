import { NextPage } from "next";
import LoadingModal from "../components/modal/LoadingModal";

interface LoadingProps {}

const Loading: NextPage<LoadingProps> = () => {
  return <LoadingModal />;
};

export default Loading;
