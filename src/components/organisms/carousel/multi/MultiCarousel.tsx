"use client"

import TitleText from "@/components/atoms/text/title/TitleText";
import ProductCarousel from "../product/ProductCarousel";
import Image from "next/image";;
import SecondaryButton from "@/components/atoms/button/secondary/SecondaryButton";
import SubtitleText from "@/components/atoms/text/subtitle/SubtitleText";
import { useState } from "react";
import PrimaryButton from "@/components/atoms/button/primary/PrimaryButton";

export default function MultiCarousel({carousels}: {carousels: {title: string, productList: {id: number, name: string, imageURL: string, price: number, discount: number, score: number, comment_num: number, promocion: boolean, trending: boolean, recommend: boolean}[]}[]}) {

    const [productList, setProductList] = useState(carousels[0].productList)



    return (
        <div className="flex space-x-[70px] bg-gray-300 p-[50px]">
            
            <div className="flex flex-col space-y-[12px] w-[20%]">

                <div className="flex justify-between">
                    <Image className="h-[40px] w-[312px]" src="/img/seleccion-top.png" alt="" sizes="100vw" height={0} width={0} priority/>
                </div>
                
                <TitleText text="En la Semana de Internet conecta con los productos más top a un precio inmejorable"/>
                <SecondaryButton onClickEvent={() => {}}>Ver mas</SecondaryButton>
            </div>
            
            <div className="flex flex-col space-y-[12px] w-[80%]">
                <ul className="flex space-x-[20px]">
                    {
                        carousels.map((carousel, index) => {
                            return <li key={index}><PrimaryButton onClickEvent={() => setProductList(carousel.productList)}><SubtitleText text={carousel.title}/></PrimaryButton></li>
                        })
                    }
                </ul>
                <ProductCarousel carouselTitle="" productList={productList}/>
            </div>

        </div>
    )
}