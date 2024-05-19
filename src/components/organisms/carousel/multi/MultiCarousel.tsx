"use client"

import Image from "next/image";

import TitleText from "@/components/atoms/text/title/TitleText";
import ProductCarousel from "../product/ProductCarousel";
import SecondaryButton from "@/components/atoms/button/secondary/SecondaryButton";
import SubtitleText from "@/components/atoms/text/subtitle/SubtitleText";

import { useState } from "react";

export default function MultiCarousel({carousels}: {carousels: {title: string, productList: {id: number, name: string, imageURL: string, price: number, discount: number, score: number, comment_num: number, promocion: boolean, trending: boolean, recommend: boolean}[]}[]}) {

    const [productList, setProductList] = useState(carousels[0].productList)

    return (
        <div className="flex max-lg:flex-col lg:space-x-[70px] max-lg:space-y-[20px] p-[40px] bg-gray-200">

            <div className="flex max-lg:space-x-[40px] lg:flex-col lg:flex-none space-y-[12px] lg:w-[312px]">
                <div className="flex flex-col space-y-[10px]">
                    <Image className="h-[40px] w-[312px]" src="/img/seleccion-top.png" alt="" sizes="100vw" height={0} width={0} priority/>
                    <TitleText text="En la Semana de Internet conecta con los productos más top a un precio inmejorable"/>
                </div>
                <div className="text-nowrap"><SecondaryButton onClickEvent={() => {}}>Ver mas</SecondaryButton></div>
            </div>
            
            <div className="flex flex-col overflow-hidden space-y-[12px]">
                <ul className="flex space-x-[20px]">
                    {
                        carousels.map((carousel, index) => {
                            return <li key={index}><button onClick={() => setProductList(carousel.productList)}><SubtitleText text={carousel.title}/></button></li>
                        })
                    }
                </ul>
                <ProductCarousel carouselTitle="" productList={productList}/>
            </div>

        </div>
    )
}