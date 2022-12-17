import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../components/button/PrimaryButton";
import ContainerWrapper from "../components/wrapper/Container";
import { useRouter } from "next/router";
import * as React from "react";
import PageNav from "../components/nav/Nav";
import PageWrapper from "../components/wrapper/PageWrapper";

export default function EcoShop() {
  const router = useRouter();
  const handleNavigate = (path: string) => () => {
    router.push(path);
  };

  return (
    <PageWrapper>
      <div className="hero w-full min-h-[400px] h-[50vh] bg-[#031B13] p-[20px] bg-[url(/bg.jpg)] bg-blend-soft-light bg-center bg-cover bg-no-repeat  ">
        <ContainerWrapper>
          <PageNav />
          <div className="text-content h-[90%]  flex flex-col gap-[40px] text-white items-center justify-center text-center ">
            <h1 className="text-white font-bold text-[40px]">
              Eco-Friendly Shop
            </h1>
            <p className="text-white max-w-[450px] mb-[20px] leading-[170%] text-[16px]">
              Shop the right way and mother earth will thank you.
            </p>
          </div>
        </ContainerWrapper>
      </div>
      <div
        className="body-content flex-1  w-full 
      ">
        <ContainerWrapper>
          <div className="floating-search w-full bg-white p-[20px] mt-[-10%] mr-auto ml-auto max-w-[900px] rounded-md ">
            <div className="input-wrapper flex gap-[20px] items-center justify-center">
              <input
                placeholder="Search Eco-products"
                className="w-full border border-gray-200 text-[14px] p-[10px] flex-1 rounded-lg  "
              />
              <PrimaryButton className="max-w-fit flex gap-[5px] p-[10px]">
                {" "}
                <Image
                  src="/icons/search.svg"
                  height={20}
                  width={20}
                  alt="search"
                />{" "}
                Search
              </PrimaryButton>
            </div>
          </div>
        </ContainerWrapper>
      </div>

      <ContainerWrapper>
        <p className="section-title text-[18px] font-semibold">Most Popular</p>
        <div className="body flex gap-[10px]  flex-wrap mt-[20px] ">
          {data.map((item) => (
            <div
              className={`card min-w-[200px] flex-1 max-w-[300px] overflow-hidden bg-[#F9F9F9] flex gap-3  flex-col rounded-md  min-h-[200px]`}>
              <div
                className={`image-wrapper max-h-[120px] bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1589365252845-092198ba5334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] overflow-hidden min-h-[150px]`}></div>
              <div className="content p-[20px] ">
                <p className="text-[14px]  text-semibold">Wooden brushes</p>

                <p className="text-[12px] font-normal text-gray-700 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis?
                </p>

                <div className="price-wrapper">
                  <p className="text-[24px] font-semibold price">$30</p>
                  <span className="text-[10px] text-sm price">
                    (3% donated to Oxville)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="section-title text-[18px] mt-[40px] font-semibold">
          All Eco-Products
        </p>
        <div className="body flex gap-[10px]  flex-wrap mt-[20px] ">
          {data2.map((item) => (
            <div
              className={`card min-w-[200px] flex-1 max-w-[300px] overflow-hidden bg-[#F9F9F9] flex gap-3  flex-col rounded-md  min-h-[200px]`}>
              <div
                className={`image-wrapper max-h-[120px] bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1498603911539-01ce6c9ad8f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] overflow-hidden min-h-[150px] `}></div>
              <div className="content p-[20px] ">
                <p className="text-[14px]  text-semibold">Wooden brushes</p>

                <p className="text-[12px] font-normal text-gray-700 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing...
                </p>

                <div className="price-wrapper">
                  <p className="text-[24px] font-semibold price">$10</p>
                  <span className="text-[10px] text-sm price">
                    (2% donated to Oxville)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContainerWrapper>
      <div className="bg-[#031B13] w-full flex-grow-0 ">
        <Footer />
      </div>
    </PageWrapper>
  );
}

const data = [
  {
    src: "https://images.unsplash.com/photo-1589365252845-092198ba5334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1498603911539-01ce6c9ad8f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const data2 = [
  {
    src: "https://images.unsplash.com/photo-1589365252845-092198ba5334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1498603911539-01ce6c9ad8f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];
