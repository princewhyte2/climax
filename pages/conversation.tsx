import UploadWidget from "../components/UploadWidget";
import ChatIcon from "../components/icon/ChatIcon";
import LikeIcon from "../components/icon/LikeIcon";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useState } from "react";
import ArrowRight from "../components/icon/ArrowRight";
import ConversationModal from "../components/ConversationModal";
import InfoIcon from "../components/icon/InfoIcon";
import LoginNotificationModal from "../components/LoginNotificationModal";
import Footer from "../components/Footer";

export default function Conversation() {
  // const [imageUrl, setImageUrl] = useState<string>("");
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: "felistus",
  //   },
  //   url: {
  //     secure: true,
  //   },
  // });
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const openConversationModal = () => setIsOpen(true);
  const openLoginNotification = () => setOpen(true);

  return (
    <main className="h-screen w-full">
      <div className="w-full h-full ">
        <div className="w-full h-fit bg-conva-bg bg-no-repeat bg-cover mb-[35px]  ">
          <div className="w-full h-full max-w-screen-2xl 2xl:mx-auto pb-28 ">
            <div className="flex justify-between items-center w-full lg:px-[99px] p-[17px] lg:pt-[70px] mb-[100px] space-x-[300px]  ">
              <div className="w-[123px] h-10">
                <img
                  src="/footerImage.png"
                  alt="logo"
                  className="w-full h-full"
                />
              </div>
              <div className="hidden lg:flex items-center space-x-[32px] text-base text-white font-medium leading-[19px] ">
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
              <p className="font-bold text-2xl lg:text-[54px] lg:leading-[81px] lg:mb-5">
                Join the Conversation
              </p>
              <p className="text-base font-semibold leading-6">
                Report of climate changes and the effects.
              </p>
            </div>
          </div>
        </div>

        {/* error message */}
        {/* <div className="w-full px-4 lg:px-[99px] mb-[65px]  ">
          <div className="border-dashed border-[#1B76FF] border-2 rounded-md w-full flex space-x-2 px-5 py-7 bg-[#F1FAFF] ">
            <InfoIcon />
            <p className="text-base leading-6 font-bold text-[#7E8299]">
              You are not yet logged in. To start a conversation or join a
              converstaion, you will have to login. Click here to Login
            </p>
          </div>
        </div> */}

        <div className="bg-white w-full ">
          <div className="w-full lg:flex lg:space-x-[80px] px-4 lg:px-[99px] mt-28 max-w-screen-2xl 2xl:mx-auto ">
            <div className="max-w-[700px] w-full pb-[57px] ">
              <div className="w-full flex justify-between mb-5  ">
                <p className="capitalize font-medium text-[28px] leading-[33px] text-black">
                  recent
                </p>
                <button
                  // onClick={openConversationModal}
                  onClick={openLoginNotification}
                  type="button"
                  className="bg-[#17B657] text-white h-10 rounded-[15px] w-[187px]  text-xs font-bold px-2"
                >
                  Start a conversation
                </button>
              </div>
              {[1, 2, 3].map((item, index) => (
                <div
                  key={index}
                  className="w-full h-fit border border-[#DDDDDD] rounded-[10px] bg-white mb-10  "
                >
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
                  <p className="px-8 text-base text-black font-normal mb-20 ">
                    Our climate is being threatened, not anyone can do
                    everything, but anyone can do something to make a change to
                    secure the health of our world. Our climate is being
                    threatened, not anyone can do everything, but anyone can do
                    something to make a change to secure the health of our ...
                  </p>
                  <div className="flex px-8 mb-1 ">
                    <div className="flex items-center mr-[27px] cursor-pointer ">
                      <LikeIcon />
                      <p className="font-normal text-sm leading-[21px] text-black ml-1">
                        23 likes
                      </p>
                    </div>
                    <div className="flex items-center cursor-pointer">
                      <ChatIcon />
                      <p className="font-normal text-sm leading-[21px] text-black ml-1">
                        3 comments
                      </p>
                    </div>
                  </div>
                  <div className="w-full py-2.5 border-t border-b px-[33px] border-[#E1E0E0] ">
                    <p className="text-black font-medium text-base capitalize">
                      comments
                    </p>
                  </div>
                  <div className="py-4 px-[33px] ">
                    <p className="capitalize text-black text-base font-semibold mb-[7px]">
                      Simeon Kenneth{" "}
                      <span className="ml-2 text-[10px] font-medium italic">
                        (3rd July 2022 | 3pm) :
                      </span>
                    </p>
                    <p className="text-xs font-normal leading-[14px] text-black">
                      Our climate is being threatened, not anyone can do
                      everything, but anyone can do something to make a change
                      to secure the health of our world. Our climate is being
                      threatened, not anyone can do everything, but anyone can
                      do something to make a change to secure the health of our
                      ...
                    </p>
                  </div>
                  {/* hide if last comment */}
                  {index === 2 && (
                    <div className="w-full h-0.5 bg-[#E1E0E0] my-4"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="max-w-[492px] w-full h-full pb-28  ">
              <div className="w-full mb-5  ">
                <p className="capitalize font-medium text-[28px] leading-[33px] text-black">
                  other articles
                </p>
              </div>
              <div className=" w-full">
                {[1, 2, 3].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#DEDEDE2B] rounded-[5px] py-[9px] px-[15px] mb-[29px] "
                  >
                    <p className="font-medium text-lg text-black capitalize leading-[21px] mb-[13px] ">
                      Carbon emission Reduction
                    </p>
                    <p className="font-normal text-base leading-[19px] text-black mb-4">
                      Our climate is being threatened, not anyone can do
                      everything, but anyone can do something to make a change
                      to secure the health of our world. Our climate is being
                      threatened, not anyone can do everything, but anyone can
                      do something to make a change to secure the health of our
                      ...
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
        </div>
        <div className="bg-[#031B13] w-full">
          <Footer />
        </div>
      </div>

      <ConversationModal open={isOpen} setOpen={setIsOpen} />
      <LoginNotificationModal open={open} setOpen={setOpen} />
    </main>
  );
}
