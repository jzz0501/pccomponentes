"use client"

import PrimaryButton from "@/components/atoms/button/primary/PrimaryButton"
import FlexImage from "@/components/atoms/image/flex/FlexImage"
import TitleText from "@/components/atoms/text/title/TitleText"
import ProductCard from "@/components/molecules/card/product/ProductCard"
import useSlider from "@/utils/hooks/useSlider"
import Image from "next/image"

export default function ProductCarousel({carouselTitle, productList}: {carouselTitle: string, productList: {id: number, name: string, imageURL: string, price: number, discount: number, score: number, comment_num: number, promocion: boolean, trending: boolean, recommend: boolean}[]}) {

    const id_slider = carouselTitle + "nonTextRailSlider"
    const id_leftButton = carouselTitle + "nonTextRailLeftButton"
    const id_rightButton = carouselTitle + "nonTextRailRightButton"

    const {onClickLeftButton, onClickRightButton} = useSlider(id_slider,id_leftButton,id_rightButton)

    return (
        <div className="relative">
            <TitleText text={carouselTitle}/>
            <ul id={id_slider} className="whitespace-nowrap overflow-hidden space-x-[20px]">
            {
                productList.map((product) => {
                    return <li className="inline-block" key={product.id}><ProductCard product={product}/></li>
                })
            }
            </ul>
            <div id={id_leftButton} className="absolute left-0 top-1/2 -translate-y-1/2">
                <PrimaryButton onClickEvent={onClickLeftButton}>
                    <Image className="w-[30px] h-[30px]" src="/img/left.svg" alt="" sizes="100vw" height={0} width={0} priority/>
                </PrimaryButton>
            </div>
            <div id={id_rightButton} className="absolute right-0 top-1/2 -translate-y-1/2">
                <PrimaryButton onClickEvent={onClickRightButton}>
                    <Image className="w-[30px] h-[30px]" src="/img/right.svg" alt="" sizes="100vw" height={0} width={0} priority/>
                </PrimaryButton>
            </div>
        </div>
    )
}