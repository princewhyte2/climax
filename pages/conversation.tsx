export default function Conversation() {
  return (
    <main className="h-screen w-full">
      <div className="w-full h-full">
        {/* banner */}
        <div className="w-full h-[400px] bg-conva-bg bg-no-repeat bg-cover mb-28 ">
          {/* naviagtion */}
          <div className="flex justify-between items-center w-full px-[99px] pt-[70px] mb-[100px] space-x-[300px]  ">
            <div className="w-[123px] ">
              <img src="/Climax.png" alt="logo" className="w-full h-full" />
            </div>
            <div className="flex items-center space-x-[32px] text-base text-white font-medium leading-[19px] ">
              <p className="capitalize">climate report</p>
              <p>Join the Conversation</p>
              <button
                className="capitalize bg-[#17B657] rounded-[15px] w-[187px] h-10"
                type="button"
              >
                donate
              </button>
            </div>
          </div>

          <div className="text-white text-center w-full">
            <p className="font-bold text-[54px] leading-[81px] mb-5">
              Join the Conversation
            </p>
            <p className="text-base font-semibold leading-6">
              Report of climate changes and the effects.
            </p>
          </div>
        </div>

        <div className="w-full flex space-x-[80px] px-[99px] ">
          <div className="w-[700px] pb-[57px] ">
            <div className="w-full h-fit border border-[#DDDDDD] rounded-[10px] bg-white  ">
              <div className="flex items-center space-x-2 border-b border-[#E1E0E0] pb-[18px] px-8 pt-8 mb-2">
                <div className="text-white w-[49px] h-[49px] bg-[#17B657] rounded-full flex items-center justify-center text-base font-normal leading-[19px]  uppercase">
                  SK
                </div>
                <div>
                  <p className="text-lg leading-[27px] font-semibold capitalize text-black">
                    Simeon Kenneth
                  </p>
                  <p className="font-normal text-xs leading-[18px] text-black">
                    3rd July 2022 | 3pm
                  </p>
                </div>
              </div>
              <p className="px-8 text-base text-black font-normal mb-[100px] ">
                Our climate is being threatened, not anyone can do everything,
                but anyone can do something to make a change to secure the
                health of our world. Our climate is being threatened, not anyone
                can do everything, but anyone can do something to make a change
                to secure the health of our ...
              </p>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="w-[492px] border border-[#CDD5E0] rounded-[23px] ">
            <div>asksjka</div>
          </div>
        </div>
      </div>
    </main>
  );
}
