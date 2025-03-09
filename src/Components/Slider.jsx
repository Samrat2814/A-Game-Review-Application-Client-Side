import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import pubg from "../assets/pubg-banner-2048-x-1152-background-42ixfphlzo28gzxb.jpg";
import mobilelegends from "../assets/mobile-legends-bang-bang-logo-fight-2ia0z1qrfbimzsgi.jpg";
import clash from "../assets//clash-of-clans-background-f88iyeweabo3r6kz.jpg";
import callofduty from "../assets/modern-warfare-2-artwork-d-e1653464231278.webp";



import { Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1} // Show only 1 image at a time
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="rounded"
    >
      <SwiperSlide>
        <img src={pubg} alt="Daraz Banner" className="w-full h-[400px] object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mobilelegends} alt="Evaly Banner" className="w-full h-[400px] object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={clash} alt="AjkerDeal Banner" className="w-full h-[400px] object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={callofduty} alt="Rokomari Banner" className="w-full h-[400px] object-cover" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
