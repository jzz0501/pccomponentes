import MyImage, { MyImageSize } from "@/components/atoms/image/MyImage"

type CarouselProperty = {
    images: string[]
}

export default function Carousel(property: CarouselProperty) {

    const {images} = property

    return (
        <ul className="w-full overflow-hidden whitespace-nowrap">
            {
                images.map((image, index) => {
                    return (
                        <li className="inline-block w-full" key={index}><MyImage imageURL={image} size={MyImageSize.WRAP_CONTENT}/></li>
                    )
                })
            }
        </ul>
    )
}