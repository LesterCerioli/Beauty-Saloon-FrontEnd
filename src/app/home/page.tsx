"use client"
import { NextPage } from "next";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import banner from "@/assets/example_saloon.jpeg"
import { images } from "@/constants/carouselPlaceholderConstants";

import { serviceList } from "@/constants/serviceConstants";
import { ServiceButton } from "../components/ServiceButton";
import Link from "next/link";
import { responsive } from "@/constants/carouselSizeConstants";
import { SaloonCardDetails } from "../components/SaloonCardDetails";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Servico{
    id: number;
    title: string;
    img: string;
    link: string;
}

interface ImageProps{
    id: number,
    path: string | StaticImport,
}

const Home: NextPage = () => {
    return (
        <main className="flex flex-1 flex-col mt-6 p-4 last: pb-24">
            <header className="flex flex-row justify-between h-fit">
                <div className="w-fit">
                    <h1 className="text-[#111111] text-2xl font-bold">Olá, seja bem-vindo ao Salão Beleza APP</h1>
                    <span className="text-[#50555C] text-sm">Encontre o serviço que procura, e cuide de sí mesma!</span>
                </div>
                <div className="w-fit h-fit">
                    <button className="flex px-3 py-3 text-white items-center justify-center bg-btn-primary-color rounded-full">
                        <FaMagnifyingGlass size={24}></FaMagnifyingGlass>
                    </button>
                </div>
            </header>
            
            <Image className="w-screen h-72 mt-6 rounded-lg" src={banner} alt="" />

            <section className="mt-6 font-bold text-base">
                <h5 className="text-[#111111]">O que você está procurando?</h5>
                <div className=" mt-6 grid gap-4 grid-cols-4">
                    {
                        serviceList.map(({id, title, img, link}: Servico) => {
                            return (
                                <ServiceButton key={id} id={id} img={img} title={title} link={link} />
                            )
                        })
                    }
                </div>
            </section>

            <section className="mt-6">

                <div className="flex items-center justify-between">
                    <h5 className="font-bold">Salões em destaque</h5>
                    <Link className="font-semibold text-sm text-btn-primary-color hover:underline decoration-1" href="#">Ver todos</Link>
                </div>
                
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    // customTransition="all 1s linear"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover={true}
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={responsive}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable
                    // transitionDuration={1000}
                    >
                        {images.map((image) => {
                            return (
                                <SaloonCardDetails key={image.id} img={image.img} />
                            );
                        })}
                </Carousel>

            </section>
      </main>
    );
}

export default Home;