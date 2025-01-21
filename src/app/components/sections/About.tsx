import { useEffect, useState } from "react";
import { CaseCard } from "../CaseCard";
import { CaseComponentProps } from "../CaseCard/types";
import { IBM_Plex_Mono } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Modal } from "../Modal";
import Dots from "../Dots";

export const AboutSection = () => {
  const [data, setData] = useState<CaseComponentProps[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    fetch("/data/casesData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(activeIndex, 'activeIndex')
  return (
    <section className={" p-6 text-center min-h-screen p-6 bg-[#f1f1f1] "}>
      <h1 className="text-2xl font-semibold mb-4">Experiences</h1>
      <p className="text-[20px] mb-12">
        Solving user & business problems since last 4+ years.
        <br />
        With unwavering enthusiasm and a passion for innovation and challenges,{" "}
        <br />
        I have been building my journey in the software development market over
        the past four years. <br />
        Each project, every line of code, represents an opportunity for growth
        and learning. <br />
        It is an immense pleasure to share a glimpse of my journey, filled with
        achievements and transformative experiences
      </p>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swipe) => setActiveIndex(swipe.activeIndex)}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <CaseCard {...item} toggleModal={toggleModal} limitChar revertFlex={index % 2 !== 0}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <Dots activeIndex={activeIndex} totalDots={data?.length ?? 0}/>
      {isModalOpen && data?.[activeIndex] && (
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <CaseCard
            {...data[activeIndex]}
            toggleModal={toggleModal}
            limitChar={false}
          />
        </Modal>
      )}
    </section>
  );
};
