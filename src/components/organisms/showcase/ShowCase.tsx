"use client"

import PrimaryButton from "@/components/atoms/button/primary/PrimaryButton";
import MyImage, { MyImageSize } from "@/components/atoms/image/MyImage";
import Carousel from "@/components/molecules/carousel/Carousel";
import ImageSlides, { SlidesSpaceX } from "@/components/molecules/slides/image/ImageSlides";

export default function ShowCase({images}: {images: string[]}) {
    return (
        <div className="relative flex flex-col w-[33.33%] max-lg:w-[50%] max-md:w-[100%]">

            <Carousel images={images} />

            <ImageSlides images={images} spaceX={SlidesSpaceX.MEDIUM}/>

            <div className="absolute top-0 left-0 flex flex-col space-y-[25px]">
                <PrimaryButton onClickEvent={() => {}}>
                    <MyImage imageURL="/img/heart.svg" size={MyImageSize.ICON}/>
                </PrimaryButton>
                <PrimaryButton onClickEvent={() => {}}>
                    <MyImage imageURL="/img/share.svg" size={MyImageSize.ICON}/>
                </PrimaryButton>
            </div>

        </div>
    )
}