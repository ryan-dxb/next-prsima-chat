import { NextPage } from "next";
import Image from "next/image";
import AuthForm from "../components/AuthForm";

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-12 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          src="/images/logo.png"
          height="48"
          width="48"
          className="mx-auto w-auto"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <AuthForm />
    </div>
  );
};

export default Home;
