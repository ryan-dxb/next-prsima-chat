"use client";

import { NextPage } from "next";
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "./inputs/Input";
import Button from "./Button";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

type AuthFormVariant = "LOGIN" | "REGISTER";

interface AuthFormProps {}

const AuthForm: NextPage<AuthFormProps> = () => {
  const [variant, setVariant] = useState<AuthFormVariant>("LOGIN");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      if (variant === "LOGIN") {
        // login
        await signIn("credentials", {
          ...data,
          redirect: false,
        }).then((response) => {
          console.log(response);
          if (response?.error) {
            toast.error(response.error);
          }
          if (response?.ok && !response?.error) {
            toast.success("Logged in successfully!");
          }
        });
      }

      if (variant === "REGISTER") {
        // register
        await axios.post("/api/register", data).catch((error) => {
          console.log(error);

          toast.error("Something went wrong! Please try again.");
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const socialLogin = (action: string) => {
    // social login
    setIsLoading(true);

    signIn(action, {
      redirect: false,
    })
      .then((response) => {
        console.log(response);
        if (response?.error) {
          toast.error(response.error);
        }
        if (response?.ok && !response?.error) {
          toast.success("Logged in successfully!");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              label="Name"
              id="name"
              type="text"
              required
              errors={errors}
              register={register}
              disabled={isLoading}
            />
          )}

          <Input
            label="Email"
            id="email"
            type="email"
            required
            errors={errors}
            register={register}
            disabled={isLoading}
          />

          <Input
            label="Password"
            id="password"
            type="password"
            required
            errors={errors}
            register={register}
            disabled={isLoading}
          />

          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {isLoading
                ? "Loading..."
                : variant === "LOGIN"
                ? "Login"
                : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500 ">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialLogin("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialLogin("google")}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "LOGIN"
              ? "Don't have an account?"
              : "Already have an account?"}
          </div>
          <div className="underline cursor-pointer" onClick={toggleVariant}>
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
