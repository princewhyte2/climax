import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import PrimaryButton from "../button/PrimaryButton";

const nav = [
  { title: "Shop", path: "eco-shop" },
  { title: "Climate Report", path: "climate-report" },
  { title: "Join the conversation", path: "conversation" },
];

export default function PageNav() {
  const router = useRouter();
  const [show, setShow] = React.useState(false);
  const handleNavigate = (path: string) => () => {
    router.push(path);
  };

  const handleCloseMenu = () => {
    setShow(false);
  };

  const handleShowMenu = () => {
    setShow(true);
  };

  return (
    <div className="nav flex justify-between bg-[#2d3b369e] p-[5px] items-center w-full ">
      <div className="left ">
        <Image
          src="/icons/climax.svg"
          height={20}
          width={120}
          alt="climax logo"
          onClick={handleNavigate("/")}
          style={{ cursor: "pointer" }}
        />
      </div>
      <ul className="right  [@media(max-width:900px)]:hidden flex gap-[20px] list-none items-center justify-end ">
        {nav.map((item) => (
          <li>
            <Link
              href={item.path}
              className="capitalize font-[14px] text-white hover:text-[#17B657] text-[14px]"
            >
              {item.title}
            </Link>
          </li>
        ))}
        <Link href={"/login"}>
          <PrimaryButton>Login</PrimaryButton>
        </Link>
      </ul>
      <button
        type="button"
        onClick={handleShowMenu}
        className="hidden [@media(max-width:900px)]:flex text-white"
      >
        <Image src="/icons/menu.svg" height={40} width={40} alt="menu" />
      </button>
      <div
        style={{ display: show ? "initial" : "none" }}
        className="menu w-full h-full p-[20px] absolute top-0 left-0 bg-[#031B13]"
      >
        <div className="top flex gap-[20px] justify-between items-center">
          <Image
            src="/icons/climax.svg"
            height={20}
            width={120}
            alt="climax logo"
            onClick={handleNavigate("/")}
            style={{ cursor: "pointer" }}
          />
          <button
            type="button"
            className="text-white"
            onClick={handleCloseMenu}
          >
            <Image
              src="/icons/close.svg"
              height={40}
              width={40}
              alt="close"
              onClick={handleCloseMenu}
            />
          </button>
        </div>
        <ul className="menu-list mt-[40px] flex flex-col  justify-evenly  h-[80%] gap=[40px]  ">
          {nav.map((item) => (
            <li>
              <Link
                href={item.path}
                className="capitalize text-[32px] text-white hover:text-[#17B657] font-bold "
              >
                {item.title}
              </Link>
            </li>
          ))}
          <PrimaryButton
            onClick={handleNavigate("/login")}
            className="max-w-[350px] min-h-[60px] mt-[30px]"
          >
            Login
          </PrimaryButton>
        </ul>
      </div>
    </div>
  );
}
