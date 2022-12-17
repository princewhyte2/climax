import { useState } from "react";
import { signIn } from "next-auth/react";
import CloseEye from "../components/icon/CloseEye";
import GoogleIcon from "../components/icon/GoogleIcon";
import OpenEye from "../components/icon/OpenEye";
import Link from "next/link";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      await signIn("credentials", {
        callbackUrl: "/conversation",
        username: loginDetails.email,
        password: loginDetails.password,
      });
    } catch (error) {
      setIsLoading(false);
      console.log("error is", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="h-screen w-full">
      <div className="h-full w-full flex ">
        <div className="flex-1 overflow-hidden h-full hidden lg:flex justify-center 2xl:items-center py-10 px-5 xl:px-10 bg-login-bg bg-no-repeat bg-cover">
          <div className="w-full max-w-[474px] h-full max-h-[420px] flex flex-col justify-between">
            <div className="w-[123px] h-10">
              <img
                src="/footerImage.png"
                alt="logo"
                className="w-full h-full"
              />
            </div>
            <div className="">
              <p className="text-white font-bold text-[54px] xl:leading-[81px] lg:leading-[60px] ">
                Save the Climate
              </p>
              <p className="xl:text-base lg:text-sm font-medium leading-6 text-white mt-2.5 w-full max-w-[424px]  ">
                Lets talk about climate change, how to do our part and stories
                of effects that are quite visible and we should take note of.
                Meet fellow climate heroes and keep the earth safe together.
              </p>
            </div>
          </div>
        </div>

        <div className="pb-[57px] w-full lg:max-w-[674px] h-full flex flex-col lg:justify-center items-center bg-login-bg bg-no-repeat bg-cover lg:bg-none overflow-y-auto px-[19px] ">
          <div className="w-[123px] h-10 mt-[57px] mb-10 lg:hidden ">
            <img src="/footerImage.png" alt="logo" className="w-full h-full" />
          </div>
          <form
            onSubmit={handleFormSubmit}
            className="bg-white rounded-[15px] lg:rounded-none text-center lg:text-left mt-5 py-8 px-[26px] "
          >
            <div className="mb-[30px] w-full max-w-[299px] ">
              <p className="text-[#031B13] text-[32px] font-semibold capitalize leading-[48px] mb-2.5">
                login
              </p>
              <p className="text-xs font-normal text-black leading-[18px] ">
                Login to join the conversation on climate change and our part in
                saving the earth
              </p>
            </div>
            <div className="mb-5">
              <label htmlFor="">
                <p className="text-left text-xs font-normal text-black leading-[18px] capitalize">
                  email address
                </p>
                <input
                  onChange={({ target }) =>
                    setLoginDetails({
                      ...loginDetails,
                      email: target.value,
                    })
                  }
                  required
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="john@hello.com"
                  className="rounded-[6px] px-4 h-[45px] mt-0.5 border border-[#CDD5E0] bg-transparent w-full max-w-[350px] text-xs font-normal text-black leading-[18px] outline-none  "
                />
              </label>
            </div>
            <div className="mb-5 ">
              <label htmlFor="password">
                <p className="text-left text-xs font-normal text-black leading-[18px] capitalize">
                  password
                </p>
                <div className="flex items-center max-w-[350px] w-full border border-[#CDD5E0] rounded-[6px] mt-0.5 pr-4 ">
                  <input
                    autoComplete="off"
                    id="password"
                    required
                    type={loginDetails.showPassword ? "text" : "password"}
                    name="password"
                    onChange={({ target }) =>
                      setLoginDetails({
                        ...loginDetails,
                        password: target.value,
                      })
                    }
                    placeholder="Enter your password"
                    className="px-4 h-[45px] outline-none bg-transparent w-full text-xs font-normal text-black leading-[18px]  "
                  />
                  <div className="cursor-pointer ">
                    {loginDetails.showPassword ? (
                      <div
                        onClick={() =>
                          setLoginDetails({
                            ...loginDetails,
                            showPassword: false,
                          })
                        }
                      >
                        <CloseEye />
                      </div>
                    ) : (
                      <div
                        onClick={() =>
                          setLoginDetails({
                            ...loginDetails,
                            showPassword: true,
                          })
                        }
                      >
                        <OpenEye />
                      </div>
                    )}
                  </div>
                </div>
              </label>
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="bg-[#17B657] hover:bg-transparent hover:border-[#031B13] border-2 hover:text-[#031B13] mb-[20px] h-[61px] w-full max-w-[350px] rounded-[15px] text-xs font-bold text-white leading-[18px] capitalize "
            >
              {isLoading ? "loading..." : "login"}
            </button>
            <button
              disabled={isLoading}
              onClick={() => signIn("google", { callbackUrl: "/conversation" })}
              type="button"
              className="flex items-center space-x-[13px] justify-center bg-white h-[49px] w-full max-w-[350px] rounded-[10px] text-xs font-bold text-black leading-[18px] border border-[#DDDDDD]  "
            >
              <GoogleIcon />
              <p>Login with Google</p>
            </button>
            <p className="mt-1 text-center">
              Don't have an account!{" "}
              <Link
                className="hover:text-green-700 underline"
                href={"/register"}
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
