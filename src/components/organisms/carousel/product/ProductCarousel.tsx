"use client"

import LeftArrowButton from "@/components/atoms/button/arrow/left/LeftArrowButton"
import RightArrowButton from "@/components/atoms/button/arrow/right/RightArrowButton"
import TitleText from "@/components/atoms/text/title/TitleText"
import ProductCard from "@/components/molecules/card/product/ProductCard"
import useSlider from "@/utils/hooks/useSlider"

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
            <div id={id_leftButton} className="absolute left-0 top-1/2 -translate-y-1/2 max-lg:invisible">
                <LeftArrowButton onClickEvent={onClickLeftButton}/>
            </div>
            <div id={id_rightButton} className="absolute right-0 top-1/2 -translate-y-1/2 max-lg:invisible">
                <RightArrowButton onClickEvent={onClickRightButton}/>
            </div>
        </div>
    )
}