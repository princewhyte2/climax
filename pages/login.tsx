import GoogleIcon from "../public/icons/GoogleIcon";

export default function Login() {
  return (
    <main className="h-screen w-full">
      <div className="h-full w-full flex">
        <div className="flex-1 relative overflow-hidden h-full hidden lg:block">
          <div className="absolute top-10 left-10">
            <img src="/Climax.png" alt="logo" className="w-full h-full" />
          </div>
          <img
            src="/loginBg.png"
            alt="login background image"
            className="w-full h-full"
          />
          <div className="absolute"></div>
        </div>

        <div className="pb-[57px] w-full lg:max-w-[674px] h-full flex flex-col lg:justify-center items-center bg-login-bg bg-no-repeat bg-cover lg:bg-none  overflow-y-auto px-[19px] ">
          <div className="mt-[57px] mb-10 lg:hidden ">
            <img src="/Climax.png" alt="logo" className="w-full" />
          </div>
          <form
            action=""
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
                  type="email"
                  name="email"
                  placeholder="john@hello.com"
                  className="rounded-[6px] px-4 h-[45px] mt-0.5 border border-[#CDD5E0] bg-white w-full max-w-[350px] text-xs font-normal text-black leading-[18px] focus:outline-none focus:outline-[#031B13] focus:mt-1 "
                />
              </label>
            </div>
            <div className="mb-10">
              <label htmlFor="">
                <p className="text-left text-xs font-normal text-black leading-[18px] capitalize">
                  password
                </p>
                <input
                  type="password"
                  name="password"
                  placeholder="........."
                  className="rounded-[6px] px-4 h-[45px] mt-0.5 border border-[#CDD5E0] bg-white w-full max-w-[350px] text-xs font-normal text-black leading-[18px] focus:outline-none focus:outline-[#031B13] focus:mt-1 "
                />
              </label>
            </div>
            <button
              type="button"
              className="bg-[#17B657] hover:bg-transparent hover:border-[#031B13] border-2 hover:text-[#031B13] mb-[50px] h-[61px] w-full max-w-[350px] rounded-[15px] text-xs font-bold text-white leading-[18px] capitalize "
            >
              login
            </button>
            <button
              type="button"
              className="flex items-center space-x-[13px] justify-center bg-white h-[49px] w-full max-w-[350px] rounded-[10px] text-xs font-bold text-black leading-[18px] border border-[#DDDDDD]  "
            >
              <GoogleIcon />
              <p>Login with Google</p>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
