import Image from "next/image";
import { useState } from "react";
import CarbonCalculationModal from "../components/CarbonCalculationModal";
import EmmissionChart from "../components/EmissionChart";
import Footer from "../components/Footer";
import ArrowRight from "../components/icon/ArrowRight";
import Navigation from "../components/Navigation";
import TotalReportPie from "../components/TotalReportPie";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  const openCarbonCalc = () => setOpen(true);
  return (
    <main className="h-screen w-full">
      <Navigation />
      <div className="bg-white xl:hidden xl:shadow-2xl mb-10 xl:mb-0 py-[35px] lg:px-[79px] px-4 ">
        <p className="font-bold capitalize text-[32px] mb-1 leading-[48px] text-black px-10">
          world carbon emission rate
        </p>
        <div className="flex flex-col lg:flex-row overflow-x-auto">
          <div className="hidden lg:block">
            <EmmissionChart />
          </div>
          <div>
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
      <div className="w-full h-auto xl:pt-[500px] mb-[117px] px-4 ">
        <div className="w-full flex flex-col lg:flex-row justify-center lg:space-x-[44px] space-y-[44px] lg:space-y-0 ">
          <div className="bg-[#FF8862] w-full max-w-[557px] rounded-[10px] h-[209px] flex items-center space-x-[31px] px-[30px]">
            <div className="w-[118px] h-[94px]">
              <img src="/co2.png" alt="co2" className="w-full h-full" />
            </div>
            <div>
              <p className="capitalize text-white font-bold text-xl mb-1">
                My Carbon Footprint
              </p>
              <p className="text-white font-medium text-sm mb-[17px] ">
                See how much carbon you are generating{" "}
              </p>
              <button
                onClick={openCarbonCalc}
                type="button"
                className="bg-white text-black text-xs font-bold capitalize w-[187px] h-10 rounded-[10px] "
              >
                Check Footprint
              </button>
            </div>
          </div>
          <div className="bg-[#40AD6C] rounded-[10px] w-full max-w-[557px] h-[209px]  flex items-center space-x-[31px] px-[30px]">
            <div className="w-[118px] h-[94px]">
              <img src="/help.png" alt="help" className="w-full h-full" />
            </div>
            <div>
              <p className="capitalize text-white font-bold text-xl mb-1">
                How Can i Help
              </p>
              <p className="text-white font-medium text-sm mb-[17px] ">
                Donate to a course , protect the climate , etc.
              </p>
              <button
                type="button"
                className="bg-white text-black text-xs font-bold capitalize w-[187px] h-10 rounded-[10px] "
              >
                shop safe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-ful  h-auto mb-[162px] px-4 lg:overflow-x-auto ">
        <div className="mx-auto h-auto w-full max-w-[1158px]">
          <p className="text-black font-medium text-xl leading-6 capitalize mb-[36px] ">
            Climate Best Practises
          </p>
          <div className="lg:grid lg:grid-cols-3 w-full lg:gap-6 flex flex-col items-center space-y-10 lg:space-y-0  ">
            {[1, 1, 2, 1, 1, 1, 1, 1, 1].map((item, index) => (
              <div
                key={index}
                className="w-full max-w-[370px] bg-[#DEDEDE2B] rounded-[5px] py-[9px] px-[15px] "
              >
                <p className="text-black capitalize font-medium text-lg leading-[21px] mb-[13px] ">
                  Carbon emission Reduction
                </p>
                <p className="font-normal text-sm leading-[19px] text-black mb-4">
                  Our climate is being threatened, not anyone can do everything,
                  but anyone can do something to make a change to secure the
                  health of our world. Our climate is being threatened, not
                  anyone can do everything, but anyone can do something to make
                  a change to secure the health of our ...
                </p>
                <div className="flex items-center space-x-2">
                  <p className="text-[#34A853] text-xs leading-[18px] font-bold capitalize">
                    read more
                  </p>
                  <ArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#031B13] w-full">
        <Footer />
      </div>
      <CarbonCalculationModal open={open} setOpen={setOpen} />
    </main>
  );
}
