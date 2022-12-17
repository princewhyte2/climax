import Image from "next/image";
import Link from "next/link";
import EmmissionChart from "./EmissionChart";
import TotalReportPie from "./TotalReportPie";

export default function Navigation() {
  return (
    <div className="w-full">
      <div className="w-full h-full max-w-screen-2xl 2xl:mx-auto pb-28 ">
        {/* <div className="flex justify-between items-center w-full lg:px-[99px] p-[17px] lg:pt-[10px] mb-[100px] space-x-[300px]  ">
          <Link href={"/"} className="w-[120px] h-[120px]">
            <img src="/icons/climax.svg" alt="logo" className="w-full h-full" />
          </Link>
          <div className="hidden lg:flex items-center space-x-[32px] text-base text-white font-medium leading-[19px] ">
            <Link href={"/eco-shop"} className="capitalize">
              Shop
            </Link>
            <Link href={"/climate-report"} className="capitalize">
              climate report
            </Link>
            <Link href={"/conversation"}>Join the Conversation</Link>
            <button
              className="capitalize bg-[#17B657] rounded-[15px] w-[187px] h-10"
              type="button"
            >
              Login
            </button>
          </div>
        </div> */}

        {/* <div className="text-white text-center w-full">
          <p className="font-bold text-2xl lg:text-[54px] lg:leading-[81px] lg:mb-5">
            Climate Report
          </p>
          <p className="text-base font-semibold leading-6">
            Report of climate changes and the effects.
          </p>
        </div> */}
        <div className="bg-white hidden xl:block shadow-2xl w-[1166px] h-[600px] py-[35px] px-[79px] absolute left-0 right-0 mx-auto ">
          <p className="font-bold capitalize text-[32px] leading-[48px] text-black px-10">
            world carbon emission rate
          </p>
          <div className="flex pt-10">
            <div className="">
              <EmmissionChart />
            </div>
            <div className="">
              <p className="px-10 capitalize text-black font-bold text-xl">
                total emission:{" "}
                <span className="text-red-600 font-semibold ">
                  300,500 tonnes
                </span>
              </p>
              <TotalReportPie />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
