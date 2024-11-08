"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/legacy/image";
import { useState } from "react";

export const Farming = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex md:flex-row flex-col-reverse">
      <div className="md:w-1/2 w-full flex items-center justify-end">
        <div className="lg:w-1/2 w-full p-4 lg:pr-20">
          <h1 className="flex items-center text-secondary-foreground uppercase mb-5">
            <div className="bg-secondary-foreground w-5 h-[1px] mr-2"></div>
            Farming
          </h1>
          <h1 className="sm:text-4xl text-3xl mb-5">Accelerating the UAE agri-food ecosystem</h1>
          <p className="text-sm mb-10">
            Take a look at our comprehensive range of support mechanisms that empower and uplift
            farmers across the region
          </p>
          <Button variant={"default"}>
            Learn more <ArrowRight />
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 w-full relative 2xl:h-screen xl:h-[70vh] lg:h-[60vh] md:h-[50vh] h-[40vh]">
        <Image
          alt="Image"
          src={"/farming.jpg"}
          loading="lazy"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,[YOUR_BASE64_BLUR_DATA]"
          className={`hover:scale-110 transition-all duration-300 ${
            isLoaded ? "blur-0" : "blur-lg"
          }`}
          onLoadingComplete={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};