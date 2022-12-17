import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../components/button/PrimaryButton";
import ContainerWrapper from "../components/wrapper/Container";
import { useRouter } from "next/router";
import * as React from "react";
import PageNav from "../components/nav/Nav";
import PageWrapper from "../components/wrapper/PageWrapper";

export default function HomePage() {
  const router = useRouter();
  const handleNavigate = (path: string) => () => {
    router.push(path);
  };

  return (
    <PageWrapper>
      <div className="hero w-full min-h-[600px] h-[60vh] bg-[#031B13] p-[20px] bg-[url(/loginBg.png)] bg-blend-screen bg-center bg-cover bg-no-repeat  ">
        <ContainerWrapper>
          <PageNav />
          <div className="text-content h-[90%]  flex flex-col gap-[40px] text-white items-center justify-center text-center ">
            <h1 className="text-white font-bold text-[40px]">
              Save the Planet
            </h1>
            <p className="text-white max-w-[450px] mb-[20px] leading-[170%] text-[16px]">
              Our climate is being threatened, not anyone can do everything, but
              anyone can do something to make a change to secure the health of
              our world.
            </p>
            <PrimaryButton
              className="w-full max-w-[350px]"
              onClick={handleNavigate("dashboard")}>
              See Climate Report
            </PrimaryButton>
          </div>
        </ContainerWrapper>
      </div>
      <div
        className="body-content flex-1  w-full 
      ">
        <ContainerWrapper>
          <div className="flex  [@media(max-width:600px)]:flex-col gap-[30px] justify-center items-center ">
            <Image
              src="/charts/radial.svg"
              height={400}
              width={400}
              alt="Radial chart"
            />

            <div className="text-content w-full  [@media(max-width:600px)]:flex   [@media(max-width:600px)]:flex-col max-w-[600px]  [@media(max-width:600px)]:items-center [@media(max-width:600px)]:justify-center ">
              <p className="text-green text-sm opacity-7 text-left text-[#85D084]">
                Do your Part
              </p>
              <h3 className="text-green text-[24px] font-semibold text-left opacity-7 text-[#17B657]  ">
                Carbon Reduction
              </h3>
              <p className="text-green max-w-[500px] mt-[10px] w-full text-sm opacity-7 text-left text-[#031B13] [@media(max-width:600px)]:text-center opacity-90">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, nulla quaerat vitae ad quia assumenda aspernatur, quod
                illo eum corporis neque, necessitatibus iste.
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse [@media(max-width:600px)]:flex-col  gap-[30px] justify-center items-center ">
            <Image
              src="/charts/bar.svg"
              height={400}
              width={400}
              alt="Radial chart"
            />

            <div className="text-content w-full  [@media(max-width:600px)]:flex   [@media(max-width:600px)]:flex-col max-w-[600px]  [@media(max-width:600px)]:items-center   [@media(max-width:600px)]:justify-center   ">
              <p className="text-green text-sm opacity-7 text-left text-[#85D084]">
                Do your Part
              </p>
              <h3 className="text-green text-[24px] font-semibold text-left opacity-7 text-[#17B657]  ">
                Carbon Reduction
              </h3>
              <p className="text-green max-w-[500px] mt-[10px] w-full text-sm opacity-7 text-left text-[#031B13] opacity-90 [@media(max-width:600px)]:text-center ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, nulla quaerat vitae ad quia assumenda aspernatur, quod
                illo eum corporis neque, necessitatibus iste.
              </p>
            </div>
          </div>
        </ContainerWrapper>
      </div>
      <div className="hero w-full min-h-fit bg-[#031B13] p-[20px] bg-[url(/loginBg.png)] bg-blend-overlay bg-center bg-cover bg-no-repeat  ">
        <ContainerWrapper>
          <div className="text-content h-full overflow-x-clip  flex flex-col gap-[40px] text-white items-center justify-center text-center mb-[60px] ">
            <h3 className="text-white font-bold text-[24px]">
              Climate Stories
            </h3>
            <p className="text-white max-w-[600px] mb-[20px] leading-[170%] text-[16px]">
              Lets talk about climate change, how to do our part and stories of
              effects that are quite visible and we should take note of. Meet
              fellow climate heroes and keep the earth safe together.
            </p>
          </div>
          <img
            src="/images/posts.png"
            className="min-w-[900px]"
            alt="conversations"
          />
          <div className="w-full flex justify-center mt-[30px]">
            <PrimaryButton className="w-full max-w-[350px]">
              Join the Conversation
            </PrimaryButton>
          </div>
        </ContainerWrapper>
      </div>
      <div className="bg-[#031B13] w-full flex-grow-0 ">
        <Footer />
      </div>
    </PageWrapper>
  );
}
