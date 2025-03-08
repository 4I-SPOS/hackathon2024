import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import bgSrc from "@/app/assets/home_bg.jpg";
import qsrc from "@/app/assets/q.webp";
import isrc from "@/app/assets/i.webp";
import Link from 'next/link';
import { Button } from '@heroui/react';

export default function CarouselLanding() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className='w-dvw'>
      <Slider {...settings}>
        <div className="h-[70vh] relative flex items-center">
            <div className='w-full h-full flex items-center'>
                <div className="py-10 px-24 flex flex-col gap-5 ">
                    <h1 className="z-30 text-white text-5xl font-bold">Portál seniora</h1>
                    <p className="z-30 text-white w-1/3">Vítejte na webu pro seniory! Najdete zde novinky, tipy na výlety a aktivity. Díky našemu chytrému systému vám doporučíme obsah na míru podle vašich zájmů!</p>
                </div>
            </div>
            
            <Image src={bgSrc} alt={""} className="absolute top-[-10rem] w-dvw z-10"></Image>
            <div className="absolute z-20 i-bg-gradient w-full h-full top-0"></div>
        </div>
        
        <div className="h-[70vh] relative flex items-center">
            <div className='w-full h-full flex items-center'>
                <div className="py-10 px-24 flex flex-col gap-5 ">
                    <h1 className="z-30 text-white text-5xl font-bold">Náš chytrý dotazník</h1>
                    <p className="z-30 text-white w-1/3">Vyplňte náš krátký dotazník a my vám na základě vašich odpovědí doporučíme aktivity, které vás budou nejvíce zajímat!</p>
                    <Link href="/questionnaire" className="z-30 ml-3">
                        <Button className="bg-white text-black font-bold  scale-[1.2] mt-2 transition">Vyplnit dotazník</Button>
                    </Link>
                </div>
            </div>
            
            <Image src={qsrc} alt={""} className="absolute top-[-10rem] w-dvw z-10"></Image>
            <div className="absolute z-20 i-bg-gradient w-full h-full top-0"></div>
        </div>
        <div className="h-[70vh] relative flex items-center">
            <div className='w-full h-full flex items-center'>
                <div className="py-10 px-24 flex flex-col gap-5 ">
                    <h1 className="z-30 text-white text-5xl font-bold">Vše z internetu <br /> na jednom místě</h1>
                    <p className="z-30 text-white w-1/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed mollis nisi, ac maximus urna.</p>
                </div>
            </div>
            
            <Image src={isrc} alt={""} className="absolute top-[-10rem] w-dvw z-10"></Image>
            <div className="absolute z-20 i-bg-gradient w-full h-full top-0"></div>
        </div>  
      </Slider>
    </div>
  );
};