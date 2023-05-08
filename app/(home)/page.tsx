import { NextPage } from "next";

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-12 bg-gray-100"></div>
  );
};

export default Home;
