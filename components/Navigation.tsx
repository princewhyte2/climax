import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="w-full h-[600px] bg-conva-bg bg-no-repeat bg-cover mb-[35px] relative  ">
      <div className="w-full h-full max-w-screen-2xl 2xl:mx-auto pb-28 ">
        <div className="flex justify-between items-center w-full lg:px-[99px] p-[17px] lg:pt-[70px] mb-[100px] space-x-[300px]  ">
          <div className="w-[123px] h-10">
            <img src="/footerImage.png" alt="logo" className="w-full h-full" />
          </div>
          <div className="hidden lg:flex items-center space-x-[32px] text-base text-white font-medium leading-[19px] ">
            <Link href={"/dashboard"} className="capitalize">
              climate report
            </Link>
            <Link href={"/conversation"}>Join the Conversation</Link>
            <button
              className="capitalize bg-[#17B657] rounded-[15px] w-[187px] h-10"
              type="button"
            >
              donate
            </button>
          </div>
        </div>

        <div className="text-white text-center w-full">
          <p className="font-bold text-2xl lg:text-[54px] lg:leading-[81px] lg:mb-5">
            Climate Report
          </p>
          <p className="text-base font-semibold leading-6">
            Report of climate changes and the effects.
          </p>
        </div>
        <div className="bg-white shadow-2xl w-[1166px] h-[600px] py-[35px] px-[79px] mt-[107px] absolute left-0 right-0 mx-auto ">
          <p className="font-bold capitalize text-[32px] leading-[48px] text-black px-10">
            world carbon emission rate
          </p>
          <div className="flex">
            <div className="">
              <Image
                src={"/barChart.png"}
                alt="barchart"
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                src={"/pieChart.png"}
                alt="barchart"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
