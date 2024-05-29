"use client"

import PrimaryButton, { PrimaryButtonBorder, PrimaryButtonRounded, PrimaryButtonSize } from "@/components/atoms/button/primary/PrimaryButton"
import ProductCardSlides from "@/components/molecules/slides/product-card/ProductCardSlides"
import ProductCardData from "@/model/ProductCard"
import useCarousel from "@/utils/hooks/useCarousel"
import useSlides from "@/utils/hooks/useSlides"

type SingleCarouselProperty = {
    carouselTitle: string,
    productCards: ProductCardData[]
}

export default function SingleCarousel(property: SingleCarouselProperty) {

    const {carouselTitle, productCards} = property

    const id_slides = `${carouselTitle}-single-carousel`
    const id_leftButton = `${carouselTitle}-carousel-left-button`
    const id_rightButton =  `${carouselTitle}-carousel-right-button`

    useSlides(id_slides)
    const {onClickLeftButton, onClickRightButton} = useCarousel(id_slides, id_leftButton, id_rightButton)

    return (
        <div className="relative">

            <ProductCardSlides id_slides={id_slides} productCards={productCards}/>

            <div id={id_leftButton} className="absolute left-0 top-1/2 -translate-y-1/2 max-lg:invisible">
                <PrimaryButton onClickEvent={onClickLeftButton} shape={PrimaryButtonSize.MEDIUM_SQUARE} rounded={PrimaryButtonRounded.SMALL} border={PrimaryButtonBorder.NORMAL}>
                    &lt;
                </PrimaryButton>
            </div>

            <div id={id_rightButton} className="absolute right-0 top-1/2 -translate-y-1/2 max-lg:invisible">
                <PrimaryButton onClickEvent={onClickRightButton} shape={PrimaryButtonSize.MEDIUM_SQUARE} rounded={PrimaryButtonRounded.SMALL} border={PrimaryButtonBorder.NORMAL}>
                    &gt;
                </PrimaryButton>
            </div>

        </div>
    )
}