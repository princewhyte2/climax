import { useState } from "react";
import CloseEye from "../components/icon/CloseEye";
import GoogleIcon from "../components/icon/GoogleIcon";
import { signIn } from "next-auth/react";
import OpenEye from "../components/icon/OpenEye";
import authService from "../services/auth";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [registerDetails, setRegisterDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    showPassword: false,
  });
  const router = useRouter();

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    if (!registerDetails.email || !registerDetails.password) return;
    setIsLoading(true);
    try {
      await authService.registerUser({
        email: registerDetails.email,
        password: registerDetails.password,
        name: registerDetails.fullName,
      });
      router.push("/login");
    } catch (error: any) {
      window.alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main className="h-screen w-full">
      <div className="h-full w-full flex">
        <div className="flex-1 overflow-hidden h-full hidden lg:flex justify-center py-10 px-5 xl:px-10 bg-login-bg bg-no-repeat bg-cover">
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

        <div className="pb-[57px] lg:pb-0 w-full lg:max-w-[674px] h-full flex flex-col lg:justify-center items-center bg-login-bg bg-no-repeat bg-cover lg:bg-none  overflow-y-auto px-[19px] ">
          <div className="w-[123px] h-10 mt-[57px] mb-10 lg:hidden ">
            <img src="/footerImage.png" alt="logo" className="w-full h-full" />
          </div>
          <form
            onSubmit={handleFormSubmit}
            className="bg-white rounded-[15px] lg:rounded-none text-center lg:text-left mt-5 py-8 px-[26px] "
          >
            <div className="mb-[30px] w-full max-w-[299px] ">
              <p className="text-[#031B13] mt-2 text-[32px] font-semibold capitalize leading-[48px] mb-2.5">
                sign up
              </p>
              <p className="text-xs font-normal text-black leading-[18px] ">
                Login to join the conversation on climate change and our part in
                saving the earth
              </p>
            </div>
            <div className="mb-5">
              <label htmlFor="fullName">
                <p className="text-left text-xs font-normal text-black leading-[18px] capitalize">
                  full name
                </p>
                <input
                  id="fullName"
                  type="text"
                  onChange={({ target }) =>
                    setRegisterDetails({
                      ...registerDetails,
                      fullName: target.value,
                    })
                  }
                  name="fullName"
                  placeholder="John Doe"
                  className="rounded-[6px] px-4 h-[45px] mt-0.5 border border-[#CDD5E0] bg-white w-full max-w-[350px] text-xs font-normal text-black leading-[18px]  "
                />
              </label>
            </div>
            <div className="mb-5">
              <label htmlFor="email">
                <p className="text-left text-xs font-normal text-black leading-[18px] capitalize">
                  email address
                </p>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={({ target }) =>
                    setRegisterDetails({
                      ...registerDetails,
                      email: target.value,
                    })
                  }
                  placeholder="johndoe@hello.com"
                  className="rounded-[6px] px-4 h-[45px] mt-0.5 border border-[#CDD5E0] bg-white w-full max-w-[350px] text-xs font-normal text-black leading-[18px]  "
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
                    id="password"
                    type={registerDetails.showPassword ? "text" : "password"}
                    name="password"
                    onChange={({ target }) =>
                      setRegisterDetails({
                        ...registerDetails,
                        password: target.value,
                      })
                    }
                    placeholder="........."
                    className="px-4 h-[45px] outline-none bg-transparent w-full text-xs font-normal text-black leading-[18px]  "
                  />
                  <div className="cursor-pointer ">
                    {registerDetails.showPassword ? (
                      <div
                        onClick={() =>
                          setRegisterDetails({
                            ...registerDetails,
                            showPassword: false,
                          })
                        }
                      >
                        <CloseEye />
                      </div>
                    ) : (
                      <div
                        onClick={() =>
                          setRegisterDetails({
                            ...registerDetails,
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
              {isLoading ? "processing..." : "register"}
            </button>
            <button
              disabled={isLoading}
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/conversation" })}
              className="flex items-center space-x-[13px] justify-center bg-white h-[49px] w-full max-w-[350px] rounded-[10px] text-xs font-bold text-black leading-[18px] border border-[#DDDDDD]  "
            >
              <GoogleIcon />
              <p>Login with Google</p>
            </button>
            <p className="mt-1 text-center">
              Already have an account!{" "}
              <Link className="hover:text-green-700 underline" href={"/login"}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
