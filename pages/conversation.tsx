import axios from "axios";
import UploadWidget from "../components/UploadWidget";
import useSWR, { useSWRConfig } from "swr";
import { useSession } from "next-auth/react";
import ChatIcon from "../components/icon/ChatIcon";
import LikeIcon from "../components/icon/LikeIcon";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useState, useEffect } from "react";
import ArrowRight from "../components/icon/ArrowRight";
import ConversationModal from "../components/ConversationModal";
import InfoIcon from "../components/icon/InfoIcon";
import LoginNotificationModal from "../components/LoginNotificationModal";
import Footer from "../components/Footer";
import Link from "next/link";
import useClimaxStores from "../lib/store";
import postService from "../services/posts";
import PrimaryButton from "../components/button/PrimaryButton";

const outSource = [
  {
    id: 1,
    content:
      "Make small automatic donations while you shop online, to support the cleantech startups trying to change the world. Clean Tech investment money has dried up over the years, so crowdsourcing is becoming the only option for many, and with a Chrome extension you can chuck in a dollar when you're buying other stuff.",
    heading: "Beam",
    link: "https://www.beamproject.co/",
  },
  {
    id: 2,
    content:
      "Climeworks Direct Air Capture technology captures CO₂ from air, mixes the CO₂ with water used by a geothermal energy plant, then pumps it deep underground. Through natural processes, the CO₂ reacts with the basaltic rock – and turns into stone within a few years, permanently and safely. Iceland is one of several locations around the world that provide ideal conditions for our pioneering process. Subscribe monthly to offset a little bit of your footprint, and support the growth of this early stage technology.",
    heading: "Climeworks",
    link: "http://climeworkspioneers.refr.cc/philsturgeon",
  },
  {
    id: 3,
    content:
      "Future Earth is a global research programme designed to provide the knowledge needed to support transformations towards sustainability. They focus on systems-based approaches, seeking to deepen the understanding of complex Earth systems and human dynamics across different disciplines",
    heading: "Future Earth",
    link: "https://futureearth.org/",
  },
];

const fetcher = () => postService.getAllPost();
export default function Conversation() {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate } = useSWRConfig();
  const [open, setOpen] = useState(false);
  const { data: posts, error } = useSWR("/posts", fetcher);
  const channel = useClimaxStores((state: any) => state.channel);

  const { data: session, status } = useSession();

  const openConversationModal = () => setIsOpen(true);
  const openLoginNotification = () => setOpen(true);

  // const openLoginNotification = async () => {
  //   try {
  //     await postService.getAllPost()
  //   } catch (error) {
  //     console.log("error occured")
  //   }
  // }

  useEffect(() => {
    channel?.bind("my-event", function (data: any) {
      mutate("/posts");
    });
  }, [channel]);

  return (
    <main className="h-screen w-full">
      <div className="w-full h-full ">
        <div className="w-full h-fit bg-conva-bg bg-no-repeat bg-cover mb-[35px]  ">
          <div className="w-full h-full max-w-screen-2xl 2xl:mx-auto pb-28 ">
            <div className="flex justify-between items-center w-full lg:px-[99px] p-[17px] lg:pt-[10px] mb-[100px] space-x-[300px]  ">
              <Link href={"/"} className="w-[120px] h-[120px]">
                <img
                  src="/icons/climax.svg"
                  alt="logo"
                  className="w-full h-full"
                />
              </Link>
              <div className="hidden lg:flex items-center space-x-[32px] text-base text-white font-medium leading-[19px] ">
                <Link href={"/eco-shop"} className="capitalize">
                  Shop
                </Link>
                <Link href={"/climate-report"} className="capitalize">
                  climate report
                </Link>
                <Link href={"/conversation"}>Join the Conversation</Link>
                <Link href={"/login"}>
                  <PrimaryButton>Login</PrimaryButton>
                </Link>
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
        <div className="bg-white w-full ">
          <div className="w-full lg:flex lg:space-x-[80px] px-4 lg:px-[99px] mt-28 max-w-screen-2xl 2xl:mx-auto ">
            <div className="max-w-[700px] w-full pb-[57px] ">
              <div className="w-full flex justify-between mb-5  ">
                <p className="capitalize font-medium text-[28px] leading-[33px] text-black">
                  recent
                </p>
                <button
                  // onClick={openConversationModal}
                  onClick={
                    status === "authenticated"
                      ? openConversationModal
                      : openLoginNotification
                  }
                  type="button"
                  className="bg-[#17B657] text-white h-10 rounded-[15px] w-[187px]  text-xs font-bold px-2"
                >
                  Start a conversation
                </button>
              </div>
              {posts?.map((item: any, index: any) => (
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
                        {item.author.name}
                      </p>
                      <p className="font-normal text-xs leading-[18px] text-black">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  <p className="px-8 text-base text-black font-normal mb-20 ">
                    {item.content}
                  </p>
                  {item.previewImage ? (
                    <div className="w-full max-h-48 overflow-hidden">
                      <img
                        src={item.previewImage}
                        alt="feature"
                        className=" h-auto block w-full"
                      />
                    </div>
                  ) : null}
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
                {outSource.map((item, index: number) => (
                  <div
                    key={index}
                    className="bg-[#DEDEDE2B] rounded-[5px] py-[9px] px-[15px] mb-[29px] "
                  >
                    <p className="font-medium text-lg text-black capitalize leading-[21px] mb-[13px] ">
                      {item.heading}
                    </p>
                    <p className="font-normal text-base leading-[19px] text-black mb-4">
                      {item.content} ...
                    </p>
                    <a
                      href={item.link}
                      target={"_blank"}
                      className="flex items-center space-x-2"
                    >
                      <p className="text-[#34A853] text-xs leading-[18px] font-bold capitalize">
                        read more
                      </p>
                      <ArrowRight />
                    </a>
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
