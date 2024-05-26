import MyImage, { MyImageBorder, MyImagePadding } from "@/components/atoms/image/MyImage"

export enum SlidesSpaceX {
    MEDIUM = "space-x-[14px]"
}

type SlidesProperty = {
    images: string[],
    spaceX: SlidesSpaceX
}


export default function ImageSlides(property: SlidesProperty) {

    const {images, spaceX} = property

    return (
        <ul className={`${spaceX} overflow-hidden whitespace-nowrap`}>
            {
                images.map((image, index) => {
                    return (
                        <li className="inline-block" key={index}>
                            <MyImage imageURL={image} padding={MyImagePadding.SMALL} border={MyImageBorder.NORMAL} />
                        </li>
                    )
                })
            }
        </ul>
    )
}