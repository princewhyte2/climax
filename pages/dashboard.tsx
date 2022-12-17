import Footer from "../components/Footer"
import ArrowRight from "../components/icon/ArrowRight"
import Navigation from "../components/Navigation"

export default function Dashboard() {
  return (
    <main className="h-screen w-full">
      <Navigation />
      <div className="w-full h-auto pt-[500px] mb-[117px] ">
        <div className="w-full  flex justify-center space-x-[44px] ">
          <div className="bg-[#FF8862] w-[557px] rounded-[10px] h-[209px] flex items-center space-x-[31px] px-[30px]">
            <div className="w-[118px] h-[94px]">
              <img src="/co2.png" alt="co2" className="w-full h-full" />
            </div>
            <div>
              <p className="capitalize text-white font-bold text-xl mb-1">My Carbon Footprint</p>
              <p className="text-white font-medium text-sm mb-[17px] ">See how much carbon you are generating </p>
              <button
                type="button"
                className="bg-white text-black text-xs font-bold capitalize w-[187px] h-10 rounded-[10px] "
              >
                Check Footprint
              </button>
            </div>
          </div>
          <div className="bg-[#40AD6C] rounded-[10px] w-[557px] h-[209px]  flex items-center space-x-[31px] px-[30px]">
            <div className="w-[118px] h-[94px]">
              <img src="/help.png" alt="help" className="w-full h-full" />
            </div>
            <div>
              <p className="capitalize text-white font-bold text-xl mb-1">How Can i Help</p>
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

      <div className=" w-ful  h-auto mb-[162px] ">
        <div className="mx-auto h-auto w-[1158px]">
          <p className="text-black font-medium text-xl leading-6 capitalize mb-[36px] ">Climate Best Practises</p>
          <div className="flex w-full space-x-[26px] overflow-auto ">
            {[1, 1, 2].map((item, index) => (
              <div key={index} className="w-[429px] bg-[#DEDEDE2B] rounded-[5px] py-[9px] px-[15px] ">
                <p className="text-black capitalize font-medium text-lg leading-[21px] mb-[13px] ">
                  Carbon emission Reduction
                </p>
                <p className="font-normal text-base leading-[19px] text-black mb-4">
                  Our climate is being threatened, not anyone can do everything, but anyone can do something to make a
                  change to secure the health of our world. Our climate is being threatened, not anyone can do
                  everything, but anyone can do something to make a change to secure the health of our ...
                </p>
                <div className="flex items-center space-x-2">
                  <p className="text-[#34A853] text-xs leading-[18px] font-bold capitalize">read more</p>
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
    </main>
  )
}
