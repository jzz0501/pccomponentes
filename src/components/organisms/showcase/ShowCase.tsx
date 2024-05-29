"use client"

import PrimaryButton, { PrimaryButtonPadding, PrimaryButtonSize } from "@/components/atoms/button/primary/PrimaryButton";
import MyImage, { MyImageSize } from "@/components/atoms/image/MyImage";
import ImageSlides, { ImageSlidesSpaceX, ImageSlidesType } from "@/components/molecules/slides/image/ImageSlides";

export default function ShowCase({images}: {images: string[]}) {

    const carouselID = "carousel"
    const swiperID = "swiper"

    const mouseEnterEvent = (index?: number) => {
        const swiper = document.getElementById(swiperID)
        if(!swiper || !index) return
        swiper.scrollLeft = swiper.clientWidth * index
    }

    return (
        <div className="relative flex flex-col">
            
            <ImageSlides id={swiperID} images={images} type={ImageSlidesType.HERO}/>

            <div className="relative h-[64px]">
                <ImageSlides id={carouselID} images={images} type={ImageSlidesType.THUMB} spaceX={ImageSlidesSpaceX.MEDIUM} mouseEnterEvent={mouseEnterEvent}/>
                <div className="absolute left-0 top-0 h-full p-[4px] bg-white">
                    <PrimaryButton onClickEvent={() => {}} padding={PrimaryButtonPadding.MEDIUM} size={PrimaryButtonSize.WRAP_CONTENT}>&lt;</PrimaryButton>
                </div>
                <div className="absolute right-0 top-0 h-full p-[4px] bg-white">
                    <PrimaryButton onClickEvent={() => {}} padding={PrimaryButtonPadding.MEDIUM} size={PrimaryButtonSize.WRAP_CONTENT}>&gt;</PrimaryButton>
                </div>
            </div>

            <div className="absolute top-0 left-0 flex flex-col space-y-[25px]">
                <PrimaryButton onClickEvent={() => {}} padding={PrimaryButtonPadding.MEDIUM}>
                    <MyImage imageURL="/img/heart.svg" size={MyImageSize.ICON}/>
                </PrimaryButton>
                <PrimaryButton onClickEvent={() => {}} padding={PrimaryButtonPadding.MEDIUM}>
                    <MyImage imageURL="/img/share.svg" size={MyImageSize.ICON}/>
                </PrimaryButton>
            </div>

        </div>
    )
}