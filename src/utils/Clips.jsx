import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

const Clips = ({ clip, imgsrc }) => {
  return (
    <div className="relative h-28 w-32 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-20 sm:h-14 ">
      <img
        src={imgsrc}
        alt="img/clips"
        className="inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10"
      />
      <div className="bg-transparent blur-effect-theme absolute left-11 top-11 lg:top-6 lg:left-8 right-0 z-[100] w-8 h-8 flex items-center justify-center rounded-full">
        <PlayIcon className="icon-style text-black " />
      </div>
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playInline={true}
        className="absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 "
      >
        <source type="video/mp4" src={clip} />
      </video>
    </div>
  );
};

export default Clips;
