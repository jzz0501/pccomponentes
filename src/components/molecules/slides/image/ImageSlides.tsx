import MyImage, { MyImageSize } from "@/components/atoms/image/MyImage"

export enum ImageSlidesType {
    HERO = "w-full",
    THUMB = "w-[64px] h-[64px] p-[4px] border-[0.5px] border-gray-300 rounded-md"
}

export enum ImageSlidesSpaceX {
    MEDIUM = "space-x-[16px]"
}

export enum ImageSlidesBorder {
    GRAY = "border-[0.25px] border-gray-300"
}

type ImageSlidesProperty = {
    id: string,
    images: string[],
    type: ImageSlidesType,
    spaceX?: ImageSlidesSpaceX,
    mouseEnterEvent?: (index?: number) => void
}

export default function ImageSlides(property: ImageSlidesProperty) {

    const {id, images, type, spaceX, mouseEnterEvent} = property

    return (
        <ul id={id} className={`overflow-hidden whitespace-nowrap ${spaceX}`}>
            {
                images.map((image, index) => {
                    return (
                        <li key={index} className={`inline-block ${type}`} onMouseEnter={() => mouseEnterEvent && mouseEnterEvent(index)}>
                            <MyImage imageURL={image} size={MyImageSize.WRAP_CONTENT} />
                        </li>
                    )
                })
            }
        </ul>
    )
}