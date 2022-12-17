import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Instagram from "./icon/Instagram";
import LinkedIn from "./icon/LinkedIn";
import Twitter from "./icon/Twitter";

const nav = [
  { title: "Shop", path: "eco-shop" },
  { title: "Climate Report", path: "dashboard" },
  { title: "Join the conversation", path: "conversation" },
];

export default function Footer() {
  const router = useRouter();
  const handleNavigate = (path: string) => () => {
    router.push(path);
  };

  return (
    <div className="max-w-screen-2xl 2xl:mx-auto h-auto px-[27px] md:px-[99px] pt-[71px] pb-[33px]  ">
      <div className="md:flex justify-between">
        <div>
          <div className="w-[123px] h-10 mb-3">
            <Image
              src="/icons/climax.svg"
              height={20}
              width={120}
              alt="climax logo"
              onClick={handleNavigate("/")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <p className="text-sm font-medium leading-[21px] text-white mb-[63px]  w-full md:max-w-[413px] ">
            Our climate is being threatened, not anyone can do everything, but
            anyone can do something to make a change to secure the health of our
            world.
          </p>
        </div>
        <div className="w-full max-w-[150px] ">
          <p className="font-semibold text-xl leading-[30px] text-white capitalize mb-[11px]  md:text-right ">
            menu
          </p>
          <ul className="text-base font-normal leading-8 capitalize text-white md:text-right">
            {nav.map((item) => (
              <li>
                <Link
                  href={item.path}
                  className="capitalize font-[14px] text-white hover:text-[#17B657] text-[14px]">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-[35px] md:my-0 w-full max-w-[150px] ">
          <p className="font-semibold text-xl leading-[30px] text-white capitalize mb-[11px] md:text-right ">
            social media
          </p>
          <ul className="text-base font-normal leading-8 capitalize text-white text-left md:text-right ">
            <li>linkedIn</li>
            <li>instagram</li>
            <li>twitter</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-[23px] mb-20 ">
        <div className="w-[35px] h-[35px] bg-[#2d3b36] rounded-full flex items-center justify-center ">
          <Instagram />
        </div>
        <div className="w-[35px] h-[35px] bg-[#2d3b36] rounded-full flex items-center justify-center ">
          <Twitter />
        </div>
        <div className="w-[35px] h-[35px] bg-[#2d3b36] rounded-full flex items-center justify-center ">
          <LinkedIn />
        </div>
      </div>
      <div className="w-full h-0.5 bg-[#F6F6F6] mb-6 "></div>
      <p className="text-[#FEFEFE] text-sm text-center font-normal md:text-center">
        Copyright © 2022 Climax
      </p>
    </div>
  );
}
