"use client"

import Image from "next/image";

import SecondaryButton from "@/components/atoms/button/secondary/SecondaryButton";

import { useState } from "react";
import Text, { TextSize } from "@/components/atoms/text/Text";
import SingleCarousel from "../single/SingleCarousel";
import ProductCardData from "@/model/ProductCard";

type MultiCarouselProperty = {
    carousels: {carouselTitle: string, productCards: ProductCardData[]}[]
}

export default function MultiCarousel(property: MultiCarouselProperty) {

    const {carousels} = property

    const [productList, setProductList] = useState(carousels[0].productCards)

    return (
        <div className="flex max-lg:flex-col lg:space-x-[70px] max-lg:space-y-[20px] p-[40px] bg-gray-200">

            <div className="flex max-lg:space-x-[40px] lg:flex-col lg:flex-none space-y-[12px] lg:w-[312px]">
                <div className="flex flex-col space-y-[10px]">
                    <Image className="h-[40px] w-[312px]" src="/img/seleccion-top.png" alt="" sizes="100vw" height={0} width={0} priority/>
                    <Text text="En la Semana de Internet conecta con los productos más top a un precio inmejorable" size={TextSize.MEDIUM}/>
                </div>
                <div className="text-nowrap">
                    <SecondaryButton onClickEvent={() => {}}>Ver mas</SecondaryButton>
                </div>
            </div>
            
            <div className="flex flex-col overflow-hidden space-y-[12px]">
                <ul className="flex space-x-[20px] overflow-hidden">
                    {
                        carousels.map((carousel, index) => {
                            return (
                                <li key={index}>
                                    <button className="text-nowrap" onClick={() => setProductList(carousel.productCards)}>
                                        <Text text={carousel.carouselTitle} size={TextSize.MEDIUM}/>
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
                <SingleCarousel carouselTitle="" productCards={productList}/>
            </div>

        </div>
    )
}